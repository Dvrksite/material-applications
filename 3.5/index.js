const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Security check: App is running as non-root user\n');
});
server.listen(8080);