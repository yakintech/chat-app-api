const {
  contactPageController,
} = require("../controllers/contactPageController");
const express = require("express");
const router = express.Router();
router.post("/", contactPageController.sendData);
module.exports = router;
