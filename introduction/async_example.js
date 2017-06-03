const fs = require('fs');

fs.readFile('./introduction.md', (err, data) => {
  console.log(data.toString());
});

console.log('Serving your file...'); // this will log first
