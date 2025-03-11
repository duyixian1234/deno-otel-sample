import { Hono } from "@hono/hono";
import { TraceRoute } from "./TraceRoute.ts";

const app = new Hono().basePath("/api");

app.use(TraceRoute());

app.get("/", (c) => {
  return c.text("Hello from the Trees!");
}).get("/weather/batch-get", async (c) => {
  const cities = c.req.queries("city") as string[];
  const result = (
    await Promise.all(cities.map(async (city: string) => {
      const resp = await fetch(
        `http://localhost:8001/weather/${city}`,
      );
      return await resp.text();
    }))
  ).join("\n");
  return c.text(result);
}).get("/weather/:city", (c) => {
  return fetch(`http://localhost:8001/weather/${c.req.param("city")}`);
});

Deno.serve(app.fetch);
