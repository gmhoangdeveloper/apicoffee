const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//Packet fiel config
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Kết nối với file DataBase
const uri = "mongodb+srv://gmhoang:Hoang@12@cluster0-ryp5w.gcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

//
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
