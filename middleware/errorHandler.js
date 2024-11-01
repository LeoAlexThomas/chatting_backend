const { constants } = require("../constant");

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode ?? 500;

  switch (statusCode) {
    case constants.NOT_FOUND:
      res.json({
        title: "NOT FoUND",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "THIS ACTION IS FORBIDDEN",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "THIS ACTION IS NOT AUTHORIZED",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.VALIDATION_ERROR:
      res.json({
        title: "THIS ACTION IS NOT VALID",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.INTERNAL_SERVER_ERROR:
      res.json({
        title: "INTERNAL SERVER ERROR",
        message: error.message,
        stackTrace: error.stack,
      });
      break;

    default:
      break;
  }
  res.json({
    message: error.message,
    stackTrace: error.stack,
  });
};

module.exports = errorHandler;
