const express = require('express');
const router = express.Router();
const moderationController = require('../controllers/moderationController');
const auth = require('../middleware/auth');

// router.get('/pending', auth, moderationController.getPendingImages);
// router.post('/approve', auth, moderationController.approveImage);

module.exports = router;
