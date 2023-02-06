const express = require("express");
const { groupsController } = require("../controllers/createGroupsController");

const router = express.Router();

router.get("/", createGroupsController.getGroups);
router.post("/create", createGroupsController.createGroup);

module.exports = router;
