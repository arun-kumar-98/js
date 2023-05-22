const jwt = require("jsonwebtoken");

module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  if (!username || !password) {
    throw new Error(`please provide email and password ${400}`);
  }
  const id = new Date().getDate();

  //generate tokens

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "5m",
  });
  console.log(token);

  res.status(200).json({ mesg: `user created ${token}` });
};

//create dashboard

module.exports.dashboard = async (req, res) => {
  let authHeader = req.headers.authorization;

  //check header existe or not

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new Error(`no token provided ${401}`);
  }

  //split

  const token = authHeader.split(" ")[1];

  try {
    //verify token
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode);
  } catch (error) {
    throw new Error(`not authorize to access this ${401}`);
  }

  const luckyNumber = Math.floor(Math.random() * 100);

  res
    .status(200)
    .json({ msg: `you are authorized \n your lucky number is ${luckyNumber}` });
};
