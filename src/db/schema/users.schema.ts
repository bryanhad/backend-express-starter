import { relations } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { blogsTable } from "./blogs.schema";
import { commentsTable } from "./comments.schema";
import { timestampColumns } from "./helper.schema";

export const usersTable = sqliteTable("users", {
   id: int().primaryKey({ autoIncrement: true }),
   name: text().notNull(),
   ...timestampColumns,
});

export const usersRelations = relations(usersTable, ({ many }) => ({
   blogs: many(blogsTable),
   comments: many(commentsTable),
}));