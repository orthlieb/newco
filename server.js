var http = require("http");
var url = require("url");
var querystring = require("querystring");

function start(route, handle) {
	function onRequest(request, response) {
		var u = url.parse(request.url);
		var pathname = u.pathname;
		var params = querystring.parse(u.query);
		
		console.log("Request for " + pathname + " received with parameters: " + JSON.stringify(params));

		route(handle, pathname, params, response);
	}

	http.createServer(onRequest).listen(8686);
	console.log("Server has started.");
}

exports.start = start;
