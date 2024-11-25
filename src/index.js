import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";

import dotenv from "dotenv";
dotenv.config();

const app = express();

(async () => {
  try {
    // Connect to the database
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();

*/
