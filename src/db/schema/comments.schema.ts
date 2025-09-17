import { relations } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { blogsTable } from "./blogs.schema";
import { usersTable } from "./users.schema";

export const commentsTable = sqliteTable("comments", {
   id: int().primaryKey({ autoIncrement: true }),
   text: text(),
   authorId: int("author_id").references(() => usersTable.id),
   blogId: int("blog_id").references(() => blogsTable.id),
});

export const commentsRelations = relations(commentsTable, ({ one }) => ({
   blog: one(blogsTable, {
      fields: [commentsTable.blogId],
      references: [blogsTable.id],
   }),
   author: one(usersTable, {
      fields: [commentsTable.authorId],
      references: [usersTable.id],
   }),
}));
