const express = require('express');
const { membersController } = require('../controllers/membersController');

const router = express.Router();

router.get('/', membersController.getAll);

module.exports = router;
