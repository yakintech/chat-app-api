const express = require("express");
const { contactController } = require("../controllers/contactController");
const router = express.Router();
router.post("/", contactController.add);
module.exports = router;
