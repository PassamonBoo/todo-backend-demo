import dd from './datadog-config';
import service from "./services";
import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.use(cors());

app.get("/api/v1/todos", (req, res) => {
  dd.logger.info("backend call")

  const todoResult = service.getTodoResult();

  res.json({
    data: todoResult,
  });
});

app.get("/api/v1/health", (req, res) => {
  res.json({
    data: "ok",
  });
});

app.listen(port, () => {
 console.log(`backend listening on port ${port}`);
});
