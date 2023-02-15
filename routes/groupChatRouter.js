const express = require("express");
const { groupChatController } = require("../controllers/groupChatController")

const router = express.Router();

router.post('/add', groupChatController.add);
router.get("/", groupChatController.getAll);

module.exports = router;
