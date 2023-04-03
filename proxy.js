const http = require('http');
const https = require('https');

const PORT = 3000; // Replace with the port you want to use
const ENDPOINT = 'https://api.chatgpt.com'; // Replace with the API endpoint you want to access

http.createServer((req, res) => {
  const options = {
    hostname: ENDPOINT,
    path: req.url,
    method: req.method,
    headers: req.headers
  };

  const proxyReq = https.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  req.pipe(proxyReq, { end: true });
}).listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
