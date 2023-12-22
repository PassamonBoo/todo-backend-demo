import tracer from "dd-trace";
import StatsD from "hot-shots";

// tracer
tracer.init({
  service: "new-backend",
  logInjection: true,
});

// logger
import { createLogger, format, transports } from "winston";
const httpTransportOptions = {
  host: "http-intake.logs.ap1.datadoghq.com",
  path: "/api/v2/logs?dd-api-key=6b1ce201f96044dfa66a6ade4af99e0b&ddsource=nodejs&service=todo-backend-poc",
  ssl: true,
};
const logger = createLogger({
  level: "info",
  exitOnError: false,
  format: format.json(),
  transports: [
    new transports.Http(httpTransportOptions),
    new transports.Console(),
  ],
});

// metrics
const metrics = new StatsD({
  port: 8125,
  globalTags: { env: "development" },
  errorHandler: function (error) {
    console.log("Socket errors caught here: ", error);
  },
});

export default {
  logger,
  tracer,
  metrics,
};
