import { Express, Router } from "express";
import taskRoutes from "./todo/routes/taskRoutes";

export default (app: Express) => {
  const router = Router();

  app.use("/", [taskRoutes(router)]);

  app.all("*", (req, res) => {
    res.status(404).json({ message: "Not found" });
  });
};
