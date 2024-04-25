const Product = require("../models/products");

const getAllProducts = async (req, res, next) => {
  const { featured, company, name, sort, fields } = req.query;
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

  let result = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  }
  if (fields) {
    const fieldList = fields.split(",").join(" ");
    result = result.select(fieldList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result.skip(skip).limit(limit);

  const products = await result;

  res.status(200).json({ nbHits: products.length, msg: products });
};

const getAllProductsStatic = async (req, res, next) => {
  const products = await Product.find({}).sort("name -price");
  res.status(200).json({ nbHits: products.length, msg: products });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
