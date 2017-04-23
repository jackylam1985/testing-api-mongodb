var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  ContentItem = require('./models'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://jackylam:password@ds115411.mlab.com:15411/jackytesting'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes');
routes(app);


app.listen(port);

console.log('ContentItem API server started on: ' + port);
