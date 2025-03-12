# Deno OpenTelemetry Sample

## Purpose

This project demonstrates the usage of Deno with OpenTelemetry for tracing. It provides a sample implementation of a gateway service and an API service, both instrumented with OpenTelemetry to capture and export trace data.

## Structure

The project contains the following files:

- `gateway.ts`: Implements the gateway service that routes requests to the API service.
- `weather.ts`: Implements the API service that provides weather information.
- `TraceRoute.ts`: Middleware for tracing HTTP routes.
- `thirdApi.ts`: Contains a function to fetch weather information.
- `deno.json`: Configuration file for Deno tasks and imports.
- `deno.lock`: Lock file for Deno dependencies.

## Usage

To use this project, follow these steps:

1. Run the following command to serve the gateway service:
   ```sh
   deno task serve-gateway
   ```

2. Run the following command to serve the API service:
   ```sh
   deno task serve-api
   ```

3. Access the gateway service at `http://localhost:8000/api`.

4. Access the API service at `http://localhost:8001/weather/:city`.

### Example API Calls

- Get weather information for a specific city:
  ```sh
  curl http://localhost:8001/weather/London
  ```

- Get weather information for multiple cities:
  ```sh
  curl "http://localhost:8000/api/weather/batch-get?city=London&city=Paris&city=New%20York"
  ```
