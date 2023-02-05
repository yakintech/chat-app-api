const express = require("express");
const { groupsController } = require("../controllers/groupsController");

const router = express.Router();

router.get('/', groupsController.getGroups);
router.post('/create', groupsController.createGroup);

module.exports = router