import { usersTable } from "@db/schema";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { requestSchema } from "./request.validation";

export const createUserRequestSchema = requestSchema.safeExtend({
   body: createInsertSchema(usersTable),
});
export const getUserByIdRequestSchema = requestSchema.safeExtend({
   params: z.object({ userId: z.coerce.number() }),
});

export type CreateUserRequestBody = z.infer<typeof createUserRequestSchema>["body"];
export type GetUserByIdRequestParams = z.infer<typeof getUserByIdRequestSchema>["params"];
