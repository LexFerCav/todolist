import mongoose from "mongoose";
import { TaskModel } from "../models/TaskModels";
import { Task } from "../../types/task";

export class TaskRepository {
  async getAllTasks() {
    const data = await TaskModel.find({ deleted: { $ne: true } }).exec();
    return { data };
  }
  async getDeletedTasks() {
    const data = await TaskModel.find({ deleted: { $eq: true } }).exec();
    return { data };
  }
  async createTask(task: Task) {
    const data = await TaskModel.create(task);
    return { data };
  }
  async updateTask({ _id, task }: { _id: string; task: Task }) {
    const data = await TaskModel.findOneAndUpdate({ _id }, task, { new: true });
    return { data };
  }
  async deleteTask(_id: string) {
    const data = await TaskModel.findOneAndUpdate(
      { _id },
      { deleted: true },
      { new: true }
    );
    return { data };
  }
  async hardDeleteTask(_id: string) {
    const data = await TaskModel.findByIdAndDelete({ _id });
    return { data };
  }
}
