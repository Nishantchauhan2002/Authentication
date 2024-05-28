const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");

async function handleUserSingup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });

  return res.render("home");
}

async function handleUserlogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password,
  });

  if (!user) {
    return res.render("login", {
      error: "Invalid UserName and Password",
    });
  }
  const sessionID = uuidv4();
  setUser(sessionID, user);
  res.cookie("uid", sessionID);

  return res.render("home");
}

module.exports = {
  handleUserSingup,
  handleUserlogin,
};
