const express = require("express");
const router = express.Router();
const validate = require("./validate");

router.post("/", validate.register);
router.get("", validate.register)

module.exports = router;
