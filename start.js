var http = require('http');
var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Hello World</h1>");
	response.end();
});

server.listen(port, ipaddress, function(){
	console.log('Server On');
});