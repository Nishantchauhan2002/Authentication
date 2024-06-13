// const sessionIdToUserMap = new Map();

const jwt = require("jsonwebtoken");
const secretKey = "Nishant$#001#"; // must be secure

function setUser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };
  return jwt.sign(payload, secretKey);
}

function getUser(token) {
  // return sessionIdToUserMap.get(id);
  if (!token) return null;
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
