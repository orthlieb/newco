var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {
	"/": requestHandlers.start,
	"/start": requestHandlers.start,
	"/upload": requestHandlers.upload,
	"/get_tasks": requestHandlers.get_tasks
};

server.start(router.route, handle);
