import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDb = async () => {
  console.log("db connection started");
  try {
    if (
      mongoose.connections[0].readyState == 0 ||
      mongoose.connections[0].readyState == 3
    ) {
      console.log("inside if block");
      console.log(process.env.MONGO_URI);
      await mongoose.connect(process.env.MONGO_URI);

      console.log("New connection created.");
    } else {
      console.log("Already created connection in use.");
    }
    console.log("Database connected");
  } catch (error) {
    console.log("Not connected", error);
  }
};
