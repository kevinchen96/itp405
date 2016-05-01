var express = require('express');
var router = express.Router();
var jwt    = require('jsonwebtoken');
var secret = require('../../config/secret');
// route middleware to verify a token
router.use(function(req, res, next) {

  // // check header or url parameters or post parameters for token
  var token = req.cookies.token;
  console.log(req.cookies.token);
  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, secret.secret, function(err, decoded) {      
      if (err) {
        return res.status(403).send({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        console.log("success!");
        req.decoded = decoded;
        if(req.decoded.admin){
          next();
        }    
        else{
          return res.status(403).send({ success: false, message: 'Not an admin.' });
        }
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'Not logged in' 
    });
    
  }

});

module.exports = router;