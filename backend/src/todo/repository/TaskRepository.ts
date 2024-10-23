import mongoose from "mongoose";
import { TaskModel } from "../models/TaskModels";

export class TaskRepository {
  async getAllTasks() {
    const data = await TaskModel.find().exec();
    return { data };
  }
  async createTask(task: any) {
    const data = await TaskModel.create(task);
    return { data };
  }
  async updateTask({ _id, task }: any) {
    const data = await TaskModel.findOneAndUpdate({ _id }, task, { new: true });
    return { data };
  }
  async deleteTask(_id: any) {
    const data = await TaskModel.findByIdAndDelete({ _id });
    return { data };
  }
}
