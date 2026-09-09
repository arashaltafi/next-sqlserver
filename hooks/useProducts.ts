import { useCallback, useEffect, useState } from "react";
import {
    CreateProductDto,
    Product,
    UpdateProductDto,
} from "@/types/product";

interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getProducts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch("/api/products");

            const result: ApiResponse<Product[]> =
                await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Failed to fetch products"
                );
            }

            setProducts(result.data);
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "Something went wrong";

            setError(message);
        } finally {
            setLoading(false);
        }
    }, []);

    const createProduct = useCallback(
        async (data: CreateProductDto) => {
            const response = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result: ApiResponse<Product> =
                await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Failed to create product"
                );
            }

            await getProducts();

            return result.data;
        },
        [getProducts]
    );

    const updateProduct = useCallback(
        async (data: UpdateProductDto) => {
            const response = await fetch(
                `/api/products/${data.Id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const result: ApiResponse<Product> =
                await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Failed to update product"
                );
            }

            await getProducts();

            return result.data;
        },
        [getProducts]
    );

    const deleteProduct = useCallback(
        async (id: number) => {
            const response = await fetch(
                `/api/products/${id}`,
                {
                    method: "DELETE",
                }
            );

            const result: ApiResponse<unknown> =
                await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Failed to delete product"
                );
            }

            await getProducts();
        },
        [getProducts]
    );

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    return {
        products,
        loading,
        error,

        getProducts,
        createProduct,
        updateProduct,
        deleteProduct,
    };
}