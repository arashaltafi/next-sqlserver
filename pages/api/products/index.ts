import type { NextApiRequest, NextApiResponse } from "next";
import {
    createProduct,
    getProducts,
} from "@/lib/db/products";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        switch (req.method) {
            case "GET": {
                const products = await getProducts();

                return res.status(200).json({
                    success: true,
                    data: products,
                });
            }

            case "POST": {
                const product = await createProduct(req.body);

                return res.status(201).json({
                    success: true,
                    data: product,
                });
            }

            default:
                res.setHeader("Allow", ["GET", "POST"]);

                return res.status(405).json({
                    success: false,
                    message: "Method not allowed",
                });
        }
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}