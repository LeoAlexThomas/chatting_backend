const express = require("express");
require("dotenv").config();
const serverless = require("serverless-http");
const errorHandler = require("../middleware/errorHandler");
const connectDB = require("../config/connectDB");

connectDB();

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

// added route to server
app.use("/api/user", require("../routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log("Server started on port: ", port);
});

const handler = serverless(app);

module.exports = async (event, context) => {
  const result = await handler(event, context);
  return result;
};
