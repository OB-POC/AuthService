const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const request = require('request');

const { secret, serviceUrls } = require('../config');

router.post('/login', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  if(username && password) {
    request
      .get(`${serviceUrls.dbUrl}/users`, (err, response, body) => {
          if(err) {
              res.status(500).json({
                  errorMsg: 'User data not available'
              }); 
          }
          let users = JSON.parse(body);
          if(users instanceof Array) {
              let userData = users.filter(user => user.username == username && user.password == password);
              if(userData.length>0) {
                  let token = jwt.sign({ username: username }, secret, { expiresIn: 86400 });
                  res.status(200).json({
                    authenticated: true,
                    token : token
                  })
              } else {
                res.status(401).json({
                  errorMsg: 'Unauthorized: Username or Password is incorrect'
                })
              }
          }
      });
    } else {
      res.status(400).json({
        errorMsg: 'Bad request: Username or Password is not provided'
      })
    }
});

router.get('/authenticate', function(req, res){
  var token = req.headers['x-access-token'];

  jwt.verify(token, config.secret , function(err, decodedObj){
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    res.status(200).send(decodedObj);
  })
});

module.exports = router;
