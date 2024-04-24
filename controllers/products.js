const getAllProducts = (req, res, next) => {
  res.status(200).json({ msg: "All products" });
};
const getAllProductsStatic = (req, res, next) => {
  res.status(200).json({ msg: "All static products" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
