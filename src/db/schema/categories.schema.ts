import { relations } from "drizzle-orm";
import { int, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";
import { timestampColumns } from "./helper.schema";
import { blogsTable } from "./blogs.schema";
import { usersTable } from "./users.schema";

export const categoriesTable = sqliteTable(
   "categories",
   {
      id: int().primaryKey({ autoIncrement: true }),
      authorId: int("author_id")
         .notNull()
         .references(() => usersTable.id),
      name: text("name").notNull(),
      ...timestampColumns,
   },
   // add unique index ( category "name" has to be unique for each "author_id" )
   (table) => [uniqueIndex("author_id_name_unique").on(table.authorId, table.name)],
);

export const categoriesRelations = relations(categoriesTable, ({ one, many }) => ({
   author: one(usersTable, {
      fields: [categoriesTable.authorId],
      references: [usersTable.id],
   }),
   blogs: many(blogsTable),
}));
