const express = require("express");
const { chatController } = require("../controllers/chatController")

const router = express.Router();

router.post('/add', chatController.add);
router.get("/", chatController.getAll);

module.exports = router;
