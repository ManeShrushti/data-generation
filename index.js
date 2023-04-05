var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
const port = process.env.PORT || 8082;
var data = require('./server/dataRoute');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', data);


app.listen(port, function (err) {
  if(err){
      console.log("Error while starting server");
  }
  else{
      console.log("Server has been started at "+port);
  }
})



