const express = require("express");
const { webUserController } = require("../controllers/webUserController");

const router = express.Router();

router.get('/', webUserController.getAll);

module.exports = router