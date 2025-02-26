const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const date = new Date().toLocaleDateString();

  const path = url.parse(req.url);
  const method = req.method;
  if (path.pathname === "/favicon.ico") return;
  fs.appendFileSync(
    "logs.txt",
    method + " " + path.pathname + " " + date + "\n"
  );
  const myurl = url.parse(req.url, true);

  switch (myurl.pathname) {
    case "/":
      res.write("Hello from home page");
      res.end();
      break;
    case "/about":
      res.write("Hello from about page");
      res.end();
      break;
    case "/search":
      const search = myurl.query.search_result;
      res.write(`Hello from search page ${search}`);
      res.end();
      break;
    default:
      res.write("404 page not found");
      res.end();
      break;
  }
});

server.listen(3000, () => {
  console.log("server is listing http://localhost:3000");
});
