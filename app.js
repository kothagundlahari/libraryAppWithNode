var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');

var app = express();
var port = 3000;

app.get('/', function(req, res){
   res.send('Hello from the library app');
});

app.use(morgan('tiny'));

app.listen(port, function(){
  debug('Listening on port: '+ chalk.green(port));
} );
