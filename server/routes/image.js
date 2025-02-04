const express = require('express');
const fileUpload = require('../controllers/fileUpload')
const multerFile = require('../utils/multerFile');

const router = express.Router();

router.post('/upload', multerFile, fileUpload);


module.exports = router