const http = require("http");
const port = 3000;

const UserController = require("./controllers/UserController");

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endpoint ${request.url}`);

  if (request.url === "/users" && request.method === "GET") {
    UserController.listUsers(request, response);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(`Cannot ${request.method} ${request.url}`);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
