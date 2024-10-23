import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controller/TaskController";

export default (router: Router): Router => {
  router.get("/todo", (req, res) => getAllTasks(req, res));
  router.post("/todo", createTask);
  router.put("/todo/:id", updateTask);
  router.delete("/todo/:id", deleteTask);
  return router;
};
