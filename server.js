const express = require("express");

const app = express();

const dashboardRoutes = require("./routes/dashboardRoutes");

app.use("/dashboard", dashboardRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});