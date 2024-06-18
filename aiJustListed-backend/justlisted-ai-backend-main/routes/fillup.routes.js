const express = require("express");
const { checkToken } = require("../middleware/token");
const { reGenerateFillUpSummary, generateFillUpSummary, fillupCaption, findFillupById, generateupdateFillUpSummary } = require("../controller/fillup.controller");
const router = express.Router();

router.route("/fillup-summary").post(checkToken,generateFillUpSummary);
router.route("/fillup-summary-update").put(checkToken,generateupdateFillUpSummary);
router.route("/fillup-regenerate-summary").patch(checkToken,reGenerateFillUpSummary);
router.route("/caption").patch(checkToken,fillupCaption);
router.route("/fillupbyId").get(checkToken,findFillupById);
module.exports = router;