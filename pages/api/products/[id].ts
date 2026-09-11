import type {
    NextApiRequest,
    NextApiResponse,
} from "next";
import {
    deleteProduct,
    getProductById,
    updateProduct,
} from "@/lib/db/products";
import { handleApiError } from "@/lib/api/handleApiError";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const id = Number(req.query.id);

    if (!Number.isInteger(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid product id",
        });
    }

    try {
        switch (req.method) {
            case "GET": {
                const product = await getProductById(id);

                if (!product) {
                    return res.status(404).json({
                        success: false,
                        message: "Product not found",
                    });
                }

                return res.status(200).json({
                    success: true,
                    data: product,
                });
            }

            case "PUT": {
                const product = await updateProduct({
                    Id: id,
                    ...req.body,
                });

                return res.status(200).json({
                    success: true,
                    data: product,
                });
            }

            case "DELETE": {
                await deleteProduct(id);

                return res.status(200).json({
                    success: true,
                    message: "Product deleted",
                });
            }

            default:
                res.setHeader(
                    "Allow",
                    ["GET", "PUT", "DELETE"]
                );

                return res.status(405).json({
                    success: false,
                    message: "Method not allowed",
                });
        }
    } catch (error) {
        return handleApiError(error, res);
    }
}