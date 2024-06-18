const express = require("express");
const { checkToken } = require("../middleware/token");
const { generatePremadeSummary, reGeneratePremadeSummary, premadeCaption, findPremadeById, generateUpdatePremadeSummary } = require("../controller/premade.controller");
const router = express.Router();

router.route("/premade-summary").post(checkToken,generatePremadeSummary);
router.route("/premade-summary-update").put(checkToken,generateUpdatePremadeSummary);
router.route("/premade-regenerate-summary").patch(checkToken,reGeneratePremadeSummary);
router.route("/caption").patch(checkToken,premadeCaption);
router.route("/premadebyId").get(checkToken,findPremadeById);
module.exports = router;