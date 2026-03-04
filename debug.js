import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("ROOT HIT");
  res.send("It works");
});

app.listen(8000, "127.0.0.1", () => {
  console.log("Debug server running on 8000");
});