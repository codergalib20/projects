const { default: mongoose } = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose
      .connect(url)
      .then(() => console.log("Database connected!".green))
      .catch((err) => console.error(err.red));
  } catch (err) {
    console.error(err.red);
  }
};

module.exports = connectDB;
