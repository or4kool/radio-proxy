var express = require('express');
var router = express.Router();
const http = require('http');
const request = require('request');
// var models = require('../models/index');





/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  
  // fetch('http://stream.broadcastmatrix.com:2199/rpc/africabeatz/streaminfo.get', {method: 'GET'})
  // 	.then(response=> {
  // 		console.log(response);
  // 		res.status(201).send(response);
  // 	})
  // 	.catch(err=>{
  // 		console.log(err)
  // 	})

  request.get('http://stream.broadcastmatrix.com:2199/rpc/africabeatz/streaminfo.get', (err, response, body)=>{
  		
  		console.log(JSON.parse(body))
  		res.send(JSON.parse(body));

  })

});

module.exports = router;
