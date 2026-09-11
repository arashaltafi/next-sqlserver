import type { NextApiResponse } from "next";
import { ApiError } from "./errors";

export function handleApiError(
    error: unknown,
    res: NextApiResponse
) {
    console.error("API Error:", error);

    if (error instanceof ApiError) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
            ...(error.code && {
                code: error.code,
            }),
        });
    }

    if (isMssqlError(error)) {
        if (error.code === "ELOGIN") {
            return res.status(500).json({
                success: false,
                message: "Database authentication failed",
                code: "DATABASE_AUTHENTICATION_ERROR",
            });
        }

        if (error.code === "ETIMEOUT") {
            return res.status(504).json({
                success: false,
                message: "Database connection timeout",
                code: "DATABASE_TIMEOUT",
            });
        }

        return res.status(500).json({
            success: false,
            message: "Database error",
            code: "DATABASE_ERROR",
        });
    }

    return res.status(500).json({
        success: false,
        message: "Internal server error",
        code: "INTERNAL_SERVER_ERROR",
    });
}

function isMssqlError(
    error: unknown
): error is { code: string; message: string } {
    return (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        typeof error.code === "string"
    );
}