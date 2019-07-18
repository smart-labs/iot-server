const log = (req, res, next) => {
  console.time("Request");
  console.log(`Method - ${req.method} Url - ${req.url} User - ${req.ip}`);
  next();
  console.timeEnd("Request");
};

export default log;
