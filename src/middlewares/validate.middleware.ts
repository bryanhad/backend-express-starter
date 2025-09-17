import { NextFunction, Request, Response } from "express";
import { z } from "zod";

type BaseRequestSchema = z.ZodObject<{
   params: z.ZodTypeAny;
   body: z.ZodTypeAny;
   query: z.ZodTypeAny;
}>;

export const validateRequest =
   <T extends BaseRequestSchema>(schema: T) =>
   (
      req: Request<
         z.infer<T>["params"],
         unknown,
         z.infer<T>["body"],
         z.infer<T>["query"]
      >,
      _res: Response,
      next: NextFunction,
   ) => {
      try {
         // enforce the request shape
         const parsed = schema.parse({
            params: req.params,
            body: req.body,
            query: req.query,
         });

         // overwrite with validated values
         req.params = parsed.params ?? {};
         req.body = parsed.body ?? {};

         next();
      } catch (err) {
         next(err);
      }
   };
