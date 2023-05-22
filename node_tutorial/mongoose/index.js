const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const router = require("./api/router/router");

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);

function init() {
  try {
    mongoose
      .connect("mongodb://localhost:27017/users", {})
      .then(() => {
        console.log(`db connected`);
      })
      .catch((err) => {
        console.log(`failled to connect${err.message}`);
      });

    app.listen(process.env.port, () => {
      console.log(`server running at port ${process.env.port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}
init();
