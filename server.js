const express = require("express");
const app = express();

const mockUserData = [
  { name: "Aldrin" },
  { name: "Cindy" },
  { name: "Edward" },
];

app.get("/users", (req, res) => {
  res.json({
    success: true,
    message: "successfully got user. Nice!",
    users: mockUserData,
  });
});

app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id,
  });
});

app.listen(8000, () => {
  console.log("server is running");
});
