const express = require("express");
const { groupsController } = require("../controllers/createGroupsController");

const router = express.Router();

router.get("/", createGroupsController.getCreateGroupUsers);
router.post("/create", createGroupsController.createGroup);

module.exports = router;
