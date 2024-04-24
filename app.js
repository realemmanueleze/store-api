require("dotenv").config();
const connectDB = require("./db/connect");

const express = require("express");
const app = express();

const productRouter = require("./routes/products");
const notFound = require("./not-found/not-found");
const errorHandler = require("./middlewares/error-handler");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRouter);
app.use(notFound);
app.use(errorHandler);

//port
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
