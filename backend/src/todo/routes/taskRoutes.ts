// @ts-nocheck
import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getDeletedTasks,
  hardDeleteTask,
  updateTask,
} from "../controller/TaskController";

export default (router: Router): Router => {
  router.get("/todo", getAllTasks);
  router.get("/todo/deleted", getDeletedTasks);
  router.post("/todo", createTask);
  router.put("/todo/:id", updateTask);
  router.delete("/todo/:id", deleteTask);
  router.delete("/todo/:id/hard", hardDeleteTask);
  return router;
};
