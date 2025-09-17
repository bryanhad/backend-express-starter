import { RequestHandler } from "express";

export type BaseResponseBody<T = unknown> = { data: T; message: string };

type DefaultPathParams = Record<string, string>;

export type BaseRequestHandler<
   PathParams = DefaultPathParams,
   ReqBody = unknown,
> = RequestHandler<PathParams, BaseResponseBody, ReqBody>;
