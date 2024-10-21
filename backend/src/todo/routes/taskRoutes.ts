import { Router } from "express";
import { createTask, getAllTasks } from "../controller/TaskController";

export default (router: Router): Router => {
  router.get("/todo", (req, res) => getAllTasks(req, res));
  router.post("/todo", createTask);
  return router;
};
