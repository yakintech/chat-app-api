const express = require("express");
const { webUserController } = require("../controllers/webUserController");

const router = express.Router();

router.get('/', webUserController.getAll);
router.post('/login', webUserController.login);
router.post('/confirmcode', webUserController.confirmCode);


module.exports = router