const express = require("express");
const router = express.Router();
const validate = require("./validate");
// const profileControllers = require("../controllers/service.profile")
// get all user
router.get("/getAll", validate.getAll);
router.get("/getProfile/:name", validate.getProfileById);
router.post("/postAll", validate.postAll);
router.post("/postUpdate/:name", validate.postUpdateById);
// router.post("/updateProfile/:name", profileControllers.updateProfile );
module.exports = router;
