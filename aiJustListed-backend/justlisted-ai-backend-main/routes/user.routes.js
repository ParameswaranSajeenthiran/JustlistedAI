const express = require("express");
const { signUp, logIn, FindUserDate, updateUser, emailValidate } = require("../controller/user.controller");
const { checkToken } = require("../middleware/token");
const router = express.Router();

router.route("/signup").post(signUp);
router.route("/login").post(logIn);
router.route("/findOne").get(checkToken,FindUserDate);
router.route("/findOneupdate").patch(checkToken,updateUser);
router.route("/emailValidate").patch(emailValidate);
module.exports = router;
