require("dotenv").config();
const connectDB = require("./db/connect");

const express = require("express");
const app = express();

const Port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(Port, () => {
      console.log(`Server listening on port ${Port}....`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
