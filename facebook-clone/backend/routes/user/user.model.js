const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const userSchema = mongoose.Schema(
  {
    first_name: {
      required: [true, "Frist name is required"],
      type: String,
      trim: true,
      text: true,
    },
    last_name: {
      required: [true, "Last name is required"],
      type: String,
      trim: true,
      text: true,
    },
    username: {
      required: [true, "username name is required"],
      type: String,
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      required: [true, "Email name is required"],
      type: String,
      trim: true,
    },
    password: {
      required: [true, "Password name is required"],
      type: String,
    },
    picture: {
      type: String,
      trim: true,
      default:
        "https://res.cloudinary.com/dpolvpc0n/image/upload/v1671972859/facebook/143086968_2856368904622192_1959732218791162458_n_nkrtnf.png",
    },
    cover: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      required: true,
      enum: ["mail", "femail", "custom"],
    },
    bYear: {
      type: Number,
      trim: true,
      required: true,
    },
    bMonth: {
      type: String,
      required: true,
      trim: true,
    },
    bDay: {
      required: true,
      type: String,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    requests: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: ObjectId,
          ref: "User",
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },
      job: {
        type: String,
      },
      workplace: {
        type: String,
      },
      heightSchool: {
        type: String,
      },
      college: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      hometown: {
        type: String,
      },
      relationship: {
        type: String,
        enum: ["Single", "In a relationship", "married"],
      },
      instagram: {
        type: String,
      },
    },
    savePost: [
      {
        post: {
          type: ObjectId,
          ref: "Post",
        },
        saveAt: {
          type: Data,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
