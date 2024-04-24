require("dotenv").config();
const connectDB = require("./db/connect");

const express = require("express");
const app = express();

const productRouter = require("./routes/products");

//routes
app.use("/api/products", productRouter);

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
