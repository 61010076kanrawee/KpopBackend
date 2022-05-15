const express = require("express");
const router = express.Router();
const validate = require("./validate");
// const profileControllers = require("../controllers/service.profile")
// get all user
router.get("/getAll", validate.getAll);

module.exports = router;
