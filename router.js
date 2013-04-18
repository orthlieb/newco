function route(handle, pathname, params, response) {
	if (typeof handle[pathname] === 'function') {
		handle[pathname](params, response);
	} else {
		console.log("No request handler found for " + pathname);
		response.writeHead(404, { "Content-Type": "text/plain" });
		response.write("404 not found");
		response.end();
	}
}

exports.route = route;
