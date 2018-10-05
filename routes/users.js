var express = require('express');
var router = express.Router();

/* home end point */
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Test Passed'})
});

module.exports = router;
