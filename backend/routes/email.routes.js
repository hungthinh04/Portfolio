const express = require('express');
const router = express.Router();
const emailController = require('../controllers/email.controller');

// Route gửi email
router.post('/send', emailController.sendEmail);

module.exports = router; 