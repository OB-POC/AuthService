var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var userData = require('../data/userData').userData;
var config = require('../data/config');

/* login end point */
router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  if(username && password){
    var userObj = userData.filter((obj)=>{
      return obj.username == username && obj.password == password;
    })[0]
    if(userObj){
      let payload = {
        username: username
      }
      var token = jwt.sign(payload, config.secret, {
        expiresIn: 86400 //expires in a day
      })

      res.status(200).json({
        authenticated: true,
        token : token
      })
    }
  }
});

module.exports = router;
