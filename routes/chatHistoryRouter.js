const {
  chatHistoryController,
} = require("../controllers/chatHistoryController");
const express = require("express");
const router = express.Router();
router.get("/", chatHistoryController.sendData);
module.exports = router;

