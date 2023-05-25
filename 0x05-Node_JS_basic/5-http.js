// HTTP server

const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;
const db = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      try {
        res.write('This is the list of our students\n');
        const resData = await countStudents(db);
        res.write(`Number of students: ${resData[1]}\n`);
        res.end(resData[0].join('\n'));
      } catch (err) {
        res.end(err.message);
      }
      break;
    default:
      break;
  }
});

app.listen(port, hostname);

module.exports = app;
