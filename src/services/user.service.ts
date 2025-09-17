import { db } from "@/db";
import { User, usersTable } from "@/db/schema";
import { CreateUserRequestBody } from "@/validation/user.validation";
import { sql } from "drizzle-orm";

export class UserService {
   public static async createUser(payload: CreateUserRequestBody): Promise<void> {
      await db.insert(usersTable).values(payload);
   }

   public static async getUsers(): Promise<User[]> {
      return await db.select().from(usersTable);
   }

   public static async getUserById(user_id: number): Promise<User | null> {
      const rows = await db
         .select()
         .from(usersTable)
         .where(sql`${usersTable.id} = ${user_id}`)
         .limit(1);
      return rows[0] ?? null;
   }
}
