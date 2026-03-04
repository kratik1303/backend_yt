import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import connectDB from "./db/index.js";
import { app } from "./app.js";


let port = process.env.PORT || 8000;

// 🔥 Start server immediately
app.listen(port, () => {
  console.log(`Server is running at port : ${port}`);
});
console.log("I AM RUNNING THIS FILE");
// Then connect DB
connectDB()
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Mongo db connection failed!!!", err);
  });

console.log("hi");



