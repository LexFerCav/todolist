import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  check: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

export const TaskModel = mongoose.model("Task", taskSchema);
