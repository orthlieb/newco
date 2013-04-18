var querystring = require("querystring");

function start(params, response) {
	console.log("Request handler 'start' was called.");

	var body = '<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html; '+ 'charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="/upload" method="post">'+
		'<textarea name="text" rows="20" cols="60"></textarea>'+ '<input type="submit" value="Submit text" />'+ 
		'</form>'+
		'</body>'+
    		'</html>';	

	response.writeHead(200, { "Content-Type": "text/html" });
	response.write(body);
	response.end();
}

function upload(params, response) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, { "Content-Type": "text/plain" });
	response.write("Hello Upload");
	response.end();
}

function get_tasks(params, response) {
	console.log("Request handler 'upload' was called.");
	
	var user_tasks = {
		corthlieb: [ "Visit cell site 100", "Visit cell site 101", "Visit cell site 102" ],
		kvora: [ "Visit cell site 200", "Visit cell site 201" ], 
		aagrawal: [ "Visit cell site 300", "Visit cell site 301", "Visit antenna tower 302", "Visit cell tower 303" ] 
	};
	
	if (user_tasks[params.user]) {
		response.writeHead(200, { "Content-Type": "application/json" });
		response.write(JSON.stringify(user_tasks[params.user]));
		response.end();
	} else {
		console.log("User " + params.user + " not found.");
		response.writeHead(400, { "Content-Type": "text/plain" });
		response.write("400 Bad Request. User " + params.user + " not found.");
		response.end();
	}
}

exports.start = start;
exports.upload = upload;
exports.get_tasks = get_tasks;

