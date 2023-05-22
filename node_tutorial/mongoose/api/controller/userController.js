const http_staus = require("http-status-codes");
const User = require("../model/user");

const saveUser = async (req, res) => {
  try {
    let response;
    if (Array.isArray(req.body)) {
      const models = req.body;
      response = await User.insertMany(models);
    } else {
      const user = new User(req.body);
      response = await user.save();
    }
    // console.log(user);

    res.status(http_staus.StatusCodes.CREATED).json({
      response: response,
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { saveUser };
