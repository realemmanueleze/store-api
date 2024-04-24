require("dotenv").config();
const connectDB = require("./db/connect");
const data = require("./products.json");
const Product = require("./models/products");

const populateDB = async () => {
  try {
    // connect DB
    await connectDB(process.env.MONGODB_URI);
    await Product.create(data);
    console.log("success!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

populateDB();
