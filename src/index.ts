import express from "express";

const app = express();
const port = 3002;

app.get("/", (req, res) => {
  res.send("Hi Haniii");
});

app.listen(port, () => {
  console.log("Server is listening on port 3002...");
});
