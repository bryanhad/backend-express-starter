import { BaseRequestHandler } from "@/interfaces/request.interface";
import { UserService } from "@/services/user.service";
import {
   CreateUserRequestBody,
   GetUserByIdRequestParams,
} from "@/validation/user.validation";

export class UserController {
   public static readonly createUser: BaseRequestHandler<unknown, CreateUserRequestBody> =
      async (req, res) => {
         await UserService.createUser(req.body);
         res.status(200).json({
            data: null,
            message: "User created successfully.",
         });
      };

   public static readonly getUsers: BaseRequestHandler = async (req, res) => {
      const users = await UserService.getUsers();
      res.status(200).json({ data: users, message: "OK" });
   };

   public static readonly getUserById: BaseRequestHandler<GetUserByIdRequestParams> =
      async (req, res) => {
         const user = await UserService.getUserById(req.params.userId);
         res.status(200).json({ data: user, message: "OK" });
      };
}
