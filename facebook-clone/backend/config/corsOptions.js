const corsOrigin = require("./corsOrigin");

const corsOptions = {
  origin: (origin, callback) => {
    if (corsOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowrd by cors!"));
    }
  },
  credential: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
