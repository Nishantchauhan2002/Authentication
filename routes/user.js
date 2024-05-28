const express = require("express");
const { handleUserSingup, handleUserlogin } = require("../controller/user");

const router = express.Router();

router.post("/", handleUserSingup);
router.post("/login", handleUserlogin);

module.exports = router;
