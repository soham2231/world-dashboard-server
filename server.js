//imports
require("dotenv").config();
const db = require("./config/db");
const express = require("express");
const cors = require("cors");
const dashboardRoutes = require("./routes/dashboardRoutes");

//instance
const app = express();

//middleware cors for react in front-end
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server running ");
});

app.use("/dashboard", dashboardRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
