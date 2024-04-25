const Product = require("../models/products");

const getAllProducts = async (req, res, next) => {
  const { featured, company, name } = req.query;
  console.log(featured);
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  const products = await Product.find(queryObject);
  res.status(200).json({ msg: products });
};

const getAllProductsStatic = async (req, res, next) => {
  const products = await Product.find({});
  res.status(200).json({ msg: products });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
