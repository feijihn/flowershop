'use strict';

var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var fs = require('fs');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/cart', function(req,res){
	if(req.query.customerId){
	let dataFilePath = 'data/' + req.query.customerId + '.json'
	fs.access(dataFilePath, fs.R_OK | fs.W_OK, (err) => { //check if customerId.json file exists
		if (err) {
			fs.writeFile(dataFilePath, '[]', 'utf8', 'w', (err) => { //create new if not
				if(err) throw(err);
				res.send(JSON.parse('[]'));
			});
		}else{
			fs.readFile(dataFilePath, (err,data) => { //send it to client if exists
				if(err) throw(err);
				res.send(JSON.parse(data));
			});
		}
	});
	}	
});

app.post('/cartadd', function(req,res){
	if(req.body.customerId){
		let dataFilePath = 'data/' + req.body.customerId + '.json'
		fs.readFile(dataFilePath, (err,data) => {
			if(err) throw err;
			var cart = JSON.parse(data);
			let newItem = {
				"name" : req.body.title,
				"number" : "1",
			}
			cart.push(newItem);
			fs.writeFile(dataFilePath, JSON.stringify(cart, null, 4),	(err) => {
				if(err) throw err;
				console.log('writing' + JSON.stringify(cart,null,4) + ' to ' + dataFilePath)
				res.json(cart);
			});	
		});
	}	
});

app.listen(app.get('port'), function() {
	var now = new Date()
	console.log(now + '-[ Server started at port ' + app.get('port'));
});
