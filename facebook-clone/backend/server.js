require("dotenv").config();
const PORT = process.env.PORT || 5000;
const colors = require("colors");
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB");
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
// Middleware
connectDB(process.env.DATABASE_URL_MONGO);
colors.enable();
app.use(cors(corsOptions));
// listening application
mongoose.connection.once("open", () => {
  console.log();
  app.listen(PORT, () => console.log(`Application running in ${PORT}`));
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});
