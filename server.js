'use strict';

var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require ('express-session');
var express = require('express');
var app = express();
var fs = require('fs');
var passport = require('passport')
var Strategy = require('passport-local').Strategy;
var db = require('./data');




passport.use(new Strategy(
  function(username, password, cb) {
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

app = express();

app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());

app.get('/cart', (req,res) =>	{
	console.log(req);
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
				console.log(data);
				res.json(JSON.parse(data));
			});
		}
	});
	}	
});

app.post('/cartadd', (req,res) => {
	if(req.body.customerId){
		let dataFilePath = 'data/' + req.body.customerId + '.json'
		fs.access(dataFilePath, fs.R_OK | fs.W_OK, (err) => {
			if(err){
				fs.writeFile(dataFilePath, '[]', (err) => {
					if(err) throw err;
					fs.readFile(dataFilePath, (err,data) => {
						if(err) throw err;
						var cart = JSON.parse(data);
						let newItem = {
							"name" : req.body.title,
							"number" : 1,
						}
						cart.push(newItem);
						fs.writeFile(dataFilePath, JSON.stringify(cart, null, 4),	(err) => {
							if(err) throw err;
							res.json(cart);
						});	
					});
				});
			}else{
			fs.readFile(dataFilePath, (err,data) => {
				var cart = JSON.parse(data);
				let newItem = {
					"name" : req.body.title,
					"number" : 1,
				}
				cart.push(newItem);
				fs.writeFile(dataFilePath, JSON.stringify(cart, null, 4),	(err) => {
					if(err) throw err;
					res.json(cart);
				});	
			});	
			}
		});
	}	
});

app.get('/catalog', (req,res) => {
	let dataFilePath = 'data/catalog.json'
	fs.readFile(dataFilePath, (err,data) => {
		if(err) throw err;
		let catalog = JSON.parse(data);
		let category = req.query.category;
		res.json(catalog[category]);
	});
});

//app.post('/admin',
  //passport.authenticate('local'),
  //function(req, res) {
    //// If this function gets called, authentication was successful.
    //// `req.user` contains the authenticated user.
    //res.redirect('/admin');
  //}
//);
app.post('/login',
  passport.authenticate('local'),
	function(req, res) {
		res.send(true)
	}
)

//app.get('/admin/panel',
  //require('connect-ensure-login').ensureLoggedIn(),
  //function(req, res){
			//res.sendFile(path.join(__dirname+'/admin/public/index.html'));
  //});
	//app.get('/admin/src/bundle.js', (req,res) => {
		//res.sendFile(path.join(__dirname+'/admin/public/src/bundle.js'));
	//})



app.listen(app.get('port'), function() {
	var now = new Date()
	console.log(now + '-[ Server started at port ' + app.get('port'));
});
