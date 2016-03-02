var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var fs = require('fs');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function() {
	var now = new Date()
	console.log(now + '-[ Server started at port ' + app.get('port'));
});
