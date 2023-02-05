const express = require("express");
const { chatController } = require("../controllers/chatController")

const router = express.Router();

router.post('/add', chatController.add);

module.exports = router;
