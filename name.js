const http = require('http');

const server = http.createServer((request, response) => {
    // Set response headers
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Log your name
    const yourName = "Your Name";
    console.log(`Received a request from ${request.connection.remoteAddress}`);
    console.log(`Your name: ${yourName}`);

    // Send response
    response.end(`Your name: ${yourName}`);
});

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
