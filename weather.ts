import { Hono } from "@hono/hono";
import { TraceRoute } from "./TraceRoute.ts";
import { getWeather } from "./thirdApi.ts";

const app = new Hono();

app.use(TraceRoute());

app.get("/weather/:city", (c) => {
  const city = c.req.param("city");
  return c.text(getWeather(city));
});

Deno.serve({ port: 8001 }, app.fetch);
