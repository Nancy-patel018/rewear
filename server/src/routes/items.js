const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const itemController = require('../controllers/itemController');
const auth = require('../middleware/auth');
// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, path.join(__dirname, '../../uploads'));
     cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
// const upload = multer({ storage: storage });
const upload = multer({ storage: storage });

// router.post('/', auth, upload.array('images', 5), addItem);
// router.get('/', getItems);
// router.get('/:id', getItem);

router.post('/', auth, upload.array('images', 5), itemController.addItem);
router.get('/', itemController.getItems);
router.get('/:id', itemController.getItem);

module.exports = router;
