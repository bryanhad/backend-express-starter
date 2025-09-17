import z from "zod";

// every request schema must follow this shape
export const requestSchema = z.object({
   params: z.any().optional(),
   body: z.any().optional(),
   query: z.any().optional(),
});
