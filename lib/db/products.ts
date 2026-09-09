import sql from "mssql";
import { getDbConnection } from "./connection";
import {
    CreateProductDto,
    Product,
    UpdateProductDto,
} from "@/types/product";

export async function getProducts(): Promise<Product[]> {
    const pool = await getDbConnection();

    const result = await pool.request().query(`
        SELECT
        Id,
        Name,
        Description,
        Price,
        Stock,
        CreatedAt,
        UpdatedAt
        FROM dbo.vw_ProductList
        ORDER BY Id DESC
  `);

    return result.recordset;
}

export async function getProductById(
    id: number
): Promise<Product | null> {
    const pool = await getDbConnection();

    const result = await pool
        .request()
        .input("Id", sql.Int, id)
        .execute("dbo.Product_GetById");

    return result.recordset[0] ?? null;
}

export async function createProduct(
    data: CreateProductDto
) {
    const pool = await getDbConnection();

    const result = await pool
        .request()
        .input("Name", sql.NVarChar(150), data.Name)
        .input(
            "Description",
            sql.NVarChar(500),
            data.Description || null
        )
        .input("Price", sql.Decimal(18, 2), data.Price)
        .input("Stock", sql.Int, data.Stock)
        .execute("dbo.Product_Create");

    return result.recordset[0];
}

export async function updateProduct(
    data: UpdateProductDto
) {
    const pool = await getDbConnection();

    const result = await pool
        .request()
        .input("Id", sql.Int, data.Id)
        .input("Name", sql.NVarChar(150), data.Name)
        .input(
            "Description",
            sql.NVarChar(500),
            data.Description || null
        )
        .input("Price", sql.Decimal(18, 2), data.Price)
        .input("Stock", sql.Int, data.Stock)
        .execute("dbo.Product_Update");

    return result.recordset[0];
}

export async function deleteProduct(id: number) {
    const pool = await getDbConnection();

    const result = await pool
        .request()
        .input("Id", sql.Int, id)
        .execute("dbo.Product_Delete");

    return result.recordset[0];
}