const getData = (req, res, next) => {
  return res.status(200).json({
    message: "Hello World!",
  });
};

module.exports = {
  getData,
};
