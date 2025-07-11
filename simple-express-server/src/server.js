const express = require("express");
const app = express();
const PORT = 8001;

app.get("/", (req, res) => {
  res.send("Hello from Node.js server!");
});

app.get("/tasks", (req, res) => {
  res.json({
    tasks: [
      "Write a diary entry from the future",
      "Create a time machine from a cardboard box",
      "Plan a trip to the dinosaurs",
      "Draw a futuristic city",
      "List items to bring on a time-travel adventure"
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
