const express = require('express');
const router = express.Router();
const modalController = require('../controllers/modalController');

router.post('/contact/modal', modalController.handleModalForm);

module.exports = router;
