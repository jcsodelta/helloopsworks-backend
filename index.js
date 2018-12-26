var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello OpsWorks!');
});

app.get('/data', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ message: 'Hello OpsWorks!' }));
}); 

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
