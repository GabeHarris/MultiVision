var express = require('express');

var env = proess_env.NODE_ENV = proess_env.NODE_ENV || "development";

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.get('*', function(req, res){
    res.render('index');
});

var port = 3030;
app.listen(port);
console.log('listening on ' + port);