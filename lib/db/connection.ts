import sql from "mssql";
import { dbConfig } from "./config";

let pool: sql.ConnectionPool | null = null;

export async function getDbConnection() {
    if (pool && pool.connected) {
        return pool;
    }

    pool = await sql.connect(dbConfig);

    return pool;
}