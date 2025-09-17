import express, { Application } from "express";
import { usersRouter } from "@/routes";
import { errorHandler } from "./middlewares/errorHandler.middleware";

const app: Application = express();

// mount JSON & URL-encoded parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mount routes
app.use("/users", usersRouter);

app.use(errorHandler);

export default app;
