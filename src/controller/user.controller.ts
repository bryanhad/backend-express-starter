import { UserService } from "@/services/user.service";
import { createApiHandler } from "@/utils/api.util";
import {
   createUserRequestSchema,
   getUserByIdRequestSchema,
} from "@/validation/user.validation";

export class UserController {
   public static readonly createUser = createApiHandler<typeof createUserRequestSchema>(
      async (req) => {
         await UserService.createUser(req.body);
         return { message: "User created successfully." };
      },
   );

   public static readonly getUserById = createApiHandler<typeof getUserByIdRequestSchema>(
      async (req) => {
         const user = await UserService.getUserById(req.params.userId);
         return { data: user };
      },
   );

   public static readonly getUsers = createApiHandler(async () => {
      const users = await UserService.getUsers();
      return { data: users };
   });
}
