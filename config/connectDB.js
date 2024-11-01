const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbCOnnectionString = process.env.DATABASE_CONNECTION_URL;
    await mongoose.connect(dbCOnnectionString);
    console.log("DB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
