const errorHandler = (err, req, res) => {
  res.status(500).json({ msg: "Something went wrong" });
};

module.exports = errorHandler;
