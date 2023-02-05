const express = require('express');
const { groupController } = require('../controllers/groupController');

const router = express.Router();

router.get('/', groupController.getAll);

module.exports = router;
