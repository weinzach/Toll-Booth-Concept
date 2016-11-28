var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){

  console.log("Booth Connected!")

  socket.on('scan', function(msg){
    console.log("Scan Recieved:")
    console.log(msg);
    io.emit('update', msg);
  });

  socket.on('disconnect', function(msg){
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
