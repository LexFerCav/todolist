import mongoose from "mongoose";

export const setupDatabases = async () => {
  try {
    const uri = process.env.MONGO_URI || "mongodb://localhost:27017";
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri, {});
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};
