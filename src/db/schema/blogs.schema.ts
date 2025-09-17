import { relations } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { commentsTable } from "./comments.schema";
import { timestampColumns } from "./helper.schema";
import { usersTable } from "./users.schema";

export const blogsTable = sqliteTable("blogs", {
   id: int().primaryKey({ autoIncrement: true }),
   authorId: int("author_id")
      .notNull()
      .references(() => usersTable.id),
   title: text().notNull(),
   description: text(),
   ...timestampColumns,
});

export const blogsRelations = relations(blogsTable, ({ one, many }) => ({
   author: one(usersTable, {
      fields: [blogsTable.authorId],
      references: [usersTable.id],
   }),
   comments: many(commentsTable),
}));
