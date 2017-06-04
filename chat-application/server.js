'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const mime = require('mime');

const chatServer = require('./lib/chat_server');

const server = http.createServer((request, response) => {
	let filePath = false;
	let absPath = false;

	if (request.url === '/') {
		filePath = 'public/index.html';
	} else {
		filePath = `public${request.url}`;
	}

	absPath = `./${filePath}`;

	serveStatic(response, cache, absPath);
});

let cache = {};

server.listen(3000, () => console.log('Server listening on port 3000'));
chatServer.listen(server);


/////////////////////////////

// Helper to handle 404 errors
function send404(response) {
	response.writeHead(404, {
		'Conent-type': 'text/plain'
	});

	response.write('Error 404: resource not found.');
	response.end();
}

// Helper to serve file data

function sendFile(response, filePath, fileContents) {
	response.writeHead(200, {
		'content-type': mime.lookup(path.basename(filePath))
	});
	response.end(fileContents);
}

// Helper to determine whether or not file is cached
function serveStatic(response, cache, absPath) {
	if (cache[absPath]) {
		sendFile(response, absPath, cache[absPath]);
	} else {
		fs.exists(absPath, exists => {
			if (exists) {
				fs.readFile(absPath, (err, data) => {
					if (err) {
						send404(response);
					} else {
						cache[absPath] = data;
						sendFile(response, absPath, data);
					}
				});
			} else {
				send404(response);
			}
		});
	}
}
