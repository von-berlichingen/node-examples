'use strict';

const http = require('http');
const fs = require('fs');

http
	.createServer((req, res) => {
		res.writeHead(200, {
			'Content-type': 'image/png'
		});

		fs
			.createReadStream('./homer.png')
			.pipe(res);
	})
	.listen(3000);

	console.log('Server running at http://localhost:3000');
