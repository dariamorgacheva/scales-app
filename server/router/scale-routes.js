const express = require('express');
const router = express.Router();
const { getAllScales, postScale } = require('../controllers/scales-controller');

router.route('/')
  .get(getAllScales)
  .post(postScale)

module.exports = router;

