var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var userData = require('../data/userData').userData;
var config = require('../data/config');

/* login end point */
router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  // console.log(req.body,username,password);
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
    else {
      res.status(401).json({
        errorMsg: 'Unauthorized: Username or Password is incorrect'
      })
    }
  }
  else {
    res.status(400).json({
      errorMsg: 'Bad request: Username or Password is not provided'
    })
  }
});

router.get('/authenticate', function(req, res, next){
  // console.log(req.headers);
  var token = req.headers['x-access-token'];

  jwt.verify(token, config.secret , function(err, decodedObj){
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    res.status(200).send(decodedObj);
  })
});

module.exports = router;
