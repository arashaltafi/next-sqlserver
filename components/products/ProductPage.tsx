import { useMemo, useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductStats from "./ProductStats";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import EmptyProducts from "./EmptyProducts";
import ProductModal from "./ProductModal";

const ProductPage = () => {
    const {
        products,
        loading,
        error,
        createProduct,
        updateProduct,
        deleteProduct,
    } = useProducts();

    const [editingProduct, setEditingProduct] = useState<any | null>(null);
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const stats = useMemo(() => {
        const totalProducts = products.length;

        const totalStock = products.reduce(
            (sum, product) => sum + Number(product.Stock),
            0
        );

        const inventoryValue = products.reduce(
            (sum, product) =>
                sum + Number(product.Price) * Number(product.Stock),
            0
        );

        const lowStock = products.filter(
            (product) => Number(product.Stock) <= 5
        ).length;

        return {
            totalProducts,
            totalStock,
            inventoryValue,
            lowStock,
        };
    }, [products]);

    const handleSubmit = async (data: {
        Name: string;
        Description: string;
        Price: number;
        Stock: number;
    }) => {
        if (editingProduct) {
            await updateProduct({
                Id: editingProduct.Id,
                ...data,
            });

            setEditingProduct(null);
            return;
        }

        await createProduct(data);
    };

    const handleDelete = async () => {
        if (deleteId === null) {
            return;
        }

        await deleteProduct(deleteId);

        setDeleteId(null);
    };

    return (
        <main className="min-h-screen bg-slate-50 transition-colors dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-8">
                    <p className="mb-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                        Inventory
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                        Products
                    </h1>

                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                        Manage your products and inventory.
                    </p>
                </div>

                {/* Stats */}
                <ProductStats
                    totalProducts={stats.totalProducts}
                    totalStock={stats.totalStock}
                    inventoryValue={stats.inventoryValue}
                    lowStock={stats.lowStock}
                />

                {/* Error */}
                {error && (
                    <div
                        className="
                            mb-6
                            rounded-xl
                            border
                            border-red-200
                            bg-red-50
                            px-4
                            py-3
                            text-sm
                            text-red-700

                            dark:border-red-900/50
                            dark:bg-red-950/30
                            dark:text-red-400
                        "
                    >
                        {error}
                    </div>
                )}

                {/* Form */}
                <div className="mb-8">
                    <ProductForm
                        editingProduct={editingProduct}
                        onSubmit={handleSubmit}
                        onCancel={() => setEditingProduct(null)}
                    />
                </div>

                {/* Products */}
                <div
                    className="
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        shadow-sm
                        transition-colors

                        dark:border-slate-800
                        dark:bg-slate-900
                        dark:shadow-black/20
                    "
                >
                    {/* Products Header */}
                    <div
                        className="
                            border-b
                            border-slate-100
                            px-6
                            py-5

                            dark:border-slate-800
                        "
                    >
                        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                            Product List
                        </h2>

                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            {products.length} products
                        </p>
                    </div>

                    {/* Products Content */}
                    {loading ? (
                        <div className="p-10 text-center text-sm text-slate-500 dark:text-slate-400">
                            Loading products...
                        </div>
                    ) : products.length === 0 ? (
                        <EmptyProducts />
                    ) : (
                        <ProductTable
                            products={products}
                            onEdit={setEditingProduct}
                            onDelete={setDeleteId}
                        />
                    )}
                </div>
            </div>

            {/* Delete Modal */}
            {deleteId !== null && (
                <ProductModal
                    title="Delete product?"
                    description="This action cannot be undone."
                    confirmText="Delete"
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteId(null)}
                />
            )}
        </main>
    );
};

export default ProductPage;