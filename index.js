var express = require ('express');
var server = express();
var port = 8081;

server.get('/', function(request, response){
  response.sendFile('index.html', {root: __dirname+'/public/HTML'})
})
server.listen(port, function(){
  console.log('Now Listening On Port' ,port);

})
