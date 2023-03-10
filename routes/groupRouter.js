const express = require("express");
const { groupController } = require("../controllers/groupController");

const router = express.Router();

router.get("/", groupController.getAll);
router.post("/", groupController.create);
router.delete("/:id", groupController.remove);

module.exports = router;
