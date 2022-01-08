const http = require("http");
const { URL } = require("url");

const port = 3000;

const routes = require("./routes");

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`);

  console.log(
    `Request method: ${request.method} | Endpoint ${parsedUrl.pathname}`
  );

  const route = routes.find(
    (route) =>
      route.endpoint === parsedUrl.pathname && route.method === request.method
  );

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams);

    route.handler(request, response);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
