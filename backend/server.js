const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/exercise-tracker", {
  useNewUrlParser: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/users", usersRouter);
app.use("/exercises", exercisesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
