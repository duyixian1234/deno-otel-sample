import { trace } from "@opentelemetry/api";

export function getWeather(city: string) {
  return trace.getTracer("weather-api").startActiveSpan(
    "getWeatherFunction",
    (span) => {
      span.setAttribute("city", city);
      span.end();
      console.log(`Fetch weather from ${city}`);    
      return `${city} is sunny, 20℃.`;
    },
  );
}
