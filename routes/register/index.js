const express = require("express");
const router = express.Router();
const validate = require("./validate");

router.post("/postAll", validate.postAll);
router.post('/register', );