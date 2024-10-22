import { Request, Response } from "express";
import { TaskRepository } from "../repository/TaskRepository";

export async function getAllTasks(
  request: Request,
  response: Response
): Promise<any> {
  const repository = new TaskRepository();
  try {
    const data = await repository.getAllTasks();
    return response.status(200).json(data);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Internal server error" });
  }
}
export async function createTask(
  request: Request,
  response: Response
): Promise<any> {
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
): Promise<any> {
  const repository = new TaskRepository();
  try {
    const id = request.params.id;
    const body = request.body;
    const data = await repository.updateTask(id, request.body);
    return response.status(200).json(data);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Internal server error" });
  }
}
