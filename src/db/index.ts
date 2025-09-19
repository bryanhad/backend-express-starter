import Database, { Database as DatabaseType } from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

const sqliteInstance: DatabaseType = new Database(process.env.DB_FILE_PATH);

// Enable Write-Ahead Logging (WAL) for better concurrency and write performance
sqliteInstance.pragma("journal_mode = WAL");

const db = drizzle({
   client: sqliteInstance,
});

export { db, sqliteInstance };
