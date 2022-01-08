const http = require("http");
const port = 3000;

const routes = require("./routes");

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endpoint ${request.url}`);

  const route = routes.find(
    (route) => route.endpoint === Request.url && route.method === request.method
  );

  if (route) {
    route.handler(request, response);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(`Cannot ${request.method} ${request.url}`);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
