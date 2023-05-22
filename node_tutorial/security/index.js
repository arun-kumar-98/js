const bcrypt = require("bcrypt");

async function myFunction(username, password) {
  try {
    const hashPassword = await bcrypt.hash(password, 8);
    console.log(hashPassword);
    const isMatched = await bcrypt.compare(password, hashPassword);
    console.log(isMatched);

    if (isMatched) {
      console.log(`login successfull with ${username} and ${password}`);
    } else {
      console.log(`invalid credentials `);
    }
  } catch (error) {
    console.log(error.message);
  }
}
myFunction("arun@gmail.com", "arun");
