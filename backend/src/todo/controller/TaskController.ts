import { Request, Response } from "express";
import { TaskRepository } from "../repository/TaskRepository";
import { Task } from "../../types/task";

export async function getAllTasks(
  request: Request,
  response: Response
): Promise<Response<Task>> {
  const repository = new TaskRepository();
  try {
    const data = await repository.getAllTasks();
    return response.status(200).json(data);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Internal server error" });
  }
}
export async function getDeletedTasks(
  request: Request,
  response: Response
): Promise<Response<Task>> {
  const repository = new TaskRepository();
  try {
    const data = await repository.getDeletedTasks();
    return response.status(200).json(data);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Internal server error" });
  }
}
export async function createTask(
  request: Request,
  response: Response
): Promise<Response<Task>> {
  const repository = new TaskRepository();
  try {
    const data = await repository.createTask(request.body);
    return response.status(200).json(data);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Internal server error" });
  }
}
export async function updateTask(
  request: Request,
  response: Response
): Promise<Response<Task>> {
  const repository = new TaskRepository();
  try {
    const id = request.params.id;
    const body = request.body;
    const data = await repository.updateTask({ _id: id, task: body });
    return response.status(200).json(data);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Internal server error" });
  }
}
export async function deleteTask(
  request: Request,
  response: Response
): Promise<Response<Task>> {
  const repository = new TaskRepository();
  try {
    const id = request.params.id;
    const data = await repository.deleteTask(id);
    return response.status(200).json(data);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Internal server error" });
  }
}
export async function hardDeleteTask(
  request: Request,
  response: Response
): Promise<Response<Task>> {
  const repository = new TaskRepository();
  try {
    const id = request.params.id;
    const data = await repository.hardDeleteTask(id);
    return response.status(200).json(data);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Internal server error" });
  }
}
