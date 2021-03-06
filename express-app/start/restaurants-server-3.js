var app = require('express')();
var findById = require('../misc/findById');
var port= 3000;
var restaurants = require('../restaurants.json');

//TODO move all the restaurants routes into external router
//TODO require router & attach it (.use) on '/restaurants'

app.get('/restaurants/:id', function(req, res){
  res.json(findById(restaurants, req.params.id));
});

app.get('/restaurants/', function(req, res){
  res.json(restaurants);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function(){
  console.log('server listening http://localhost:' + port);
});
