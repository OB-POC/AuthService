var express = require('express');
var router = express.Router();

/* home end point */
router.get('/', function(req, res, next) {
    res.render('index', {title: 'My custom title'})
});

module.exports = router;
