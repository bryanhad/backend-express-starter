import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export function errorHandler(
   err: unknown,
   _req: Request,
   res: Response,
   _next: NextFunction,
) {
   console.error({ err });

   // Handle Zod validation errors nicely
   if (err instanceof ZodError) {
      return res.status(400).json({
         message: "Bad Request",
         errors: err.issues.map((i) => ({
            field: i.path[0],
            message: i.message,
         })),
      });
   }

   // Handle known errors (custom app errors)
   if (err instanceof Error) {
      return res.status(500).json({
         message: err.message,
      });
   }

   // Fallback
   res.status(500).json({ message: "Internal Server Error" });
}
