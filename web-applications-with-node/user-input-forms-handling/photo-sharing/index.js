'use strict';

const http = require('http');
const formidable = require('formidable');

const server = http
  .createServer((req, res) => {
    if (req.method === 'GET') {
      show(req, res);
    } else if (req.method === 'POST') {
      upload(req, res);
    }
  })
  .listen(3000);

/////////////////////////////

function show(req, res) {
  const html =`
  <form method="post" action="/" enctype="multipart/form-data">
    <p><input type="text" name="name" /></p>
    <p><input type="file" name="file"/></p>
    <p><input type="submit" value="Upload"/></p>
  </form>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.end(html);
}

function upload(req, res) {
  if(!isFormaData(req)) {
    res.statusCode = 404;
    res.end('Bad request: expecting multipart/form-data');
    return;
  }

  const form = new formidable.IncomingForm();
  form.uploadDir = './'

  form.on('field', (field, value) => {
    console.log(field);
    console.log(value);
  });

  form.on('file', (name, file) => {
    console.log(name);
    console.log(file);
  });

  form.on('progress', (bytesReceived, bytesExpected) => {
    const percent = Math.floor(bytesReceived / bytesExpected *100);
    console.log(`${percent}%`);
  });

  form.on('end', () => res.end('Upload complete'));

  form.parse(req);
}

function isFormaData(req) {
  const type = req.headers['content-type'] || '';

  return type.indexOf('multipart/form-data') === 0;
}
