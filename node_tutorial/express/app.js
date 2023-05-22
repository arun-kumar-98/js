const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { urlencoded } = require("express");
const { login, dashboard } = require("./main");

require("dotenv").config();
const app = express();

const port = process.env.port || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

function init(req, res) {
  app.post("/login", login);
  app.post("/dashboard", dashboard);

  app.listen(port, () => {
    console.log(`server listenig at ${port}`);
  });
}
init();
