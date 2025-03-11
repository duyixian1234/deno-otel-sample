import type { MiddlewareHandler } from "@hono/hono/types";
import { trace } from "@opentelemetry/api";

export const TraceRoute = (): MiddlewareHandler => {
  return async function (c, next) {
    const span = trace.getActiveSpan();
    span?.setAttribute("http.route", c.req.path);
    span?.updateName(`${c.req.method} ${c.req.path}`);
    await next();
  };
};
