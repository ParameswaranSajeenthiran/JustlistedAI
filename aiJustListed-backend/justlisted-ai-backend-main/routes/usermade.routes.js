const express = require("express");
const { checkToken } = require("../middleware/token");
const { findAllMade } = require("../controller/usermade.controller");
const router = express.Router();


router.route("/findall").get(checkToken,findAllMade);
module.exports = router;
