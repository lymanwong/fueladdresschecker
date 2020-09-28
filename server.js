require('dotenv').config();

var express = require('express');
var app     = express();
var path    = require("path");
var cors = require('cors');
var host = process.env.HOST;
var port = process.env.PORT;

app.use(cors());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// set static directories
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+ '/public/pages/index.html'));
});

app.listen(port, host, ()=>{
	console.log('Server is listening ' + host + ':' + port);
})