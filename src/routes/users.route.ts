import { UserController } from "@/controller/user.controller";
import { validateRequest } from "@/middlewares/validate.middleware";
import {
   createUserRequestSchema,
   getUserByIdRequestSchema,
} from "@/validation/user.validation";
import { Router } from "express";

const usersRouter: Router = Router();

usersRouter.get(
   "/:userId",
   validateRequest(getUserByIdRequestSchema),
   UserController.getUserById,
);
usersRouter.get("/", UserController.getUsers);
usersRouter.post(
   "/",
   validateRequest(createUserRequestSchema),
   UserController.createUser,
);

export { usersRouter };
