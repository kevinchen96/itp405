var express = require('express');
var router = express.Router();

router.use('/api', require('./api'));
router.use('/auth', require('./auth'));
router.use('/middleware', require('./middleware'));

module.exports = router;