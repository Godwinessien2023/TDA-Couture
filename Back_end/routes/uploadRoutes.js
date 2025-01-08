const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const { uploadImage
} = require('../controller/uploadController');
const {isAdmin, authMiddleware,} = require('../middlewares/authMiddleware');

router.post('/uploadimage', isAdmin, authMiddleware, upload.single('image'), uploadImage);

module.exports = router;
