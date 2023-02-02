const express = require("express");
const { webUserController } = require("../controllers/webUserController");

const router = express.Router();

router.get('/', webUserController.getAll);
router.post('/login', webUserController.login);


module.exports = router