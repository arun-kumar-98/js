const mongoose = require("mongoose");
const validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validator(value) {
      if (!validator(isEmail(value))) {
        throw new Error(`invalid email`);
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    trim: true,
    validator(value) {
      if (value.lowercase().includes("password")) {
        throw new Error("password can not contains password");
      }
    },
  },

  age: {
    type: Number,
    required: true,
    validator(value) {
      if (value < 0) {
        throw new Error("age should not be negative");
      }
    },
  },
});

//check before save record if password updated encrypt

//middleware

userSchema.methods.generateTokens = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "SECRET_TOKEN");
  return token;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//create schema
const User = mongoose.model("user", userSchema);

module.exports = User;
