import mongoose from "mongoose";

let isConnected: boolean = false;

const dbConnect = async (): Promise<void> => {
  if (isConnected) {
    console.log("Mongo DB is already running");
    return;
  }

  try {
    const MONGO_URI = process.env.MONGO_URI;
    await mongoose.connect(MONGO_URI || "");

    isConnected = true;
    console.log("Mongo DB is connected successfully");
    return;
  }

  catch (err) {
    console.log("Database connection failed", err);
    return;
  }
};

export default dbConnect;