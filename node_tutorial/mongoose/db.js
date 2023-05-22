const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/users",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log(`database connected successfully`);
  }
);
