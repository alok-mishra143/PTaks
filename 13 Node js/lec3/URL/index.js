const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const date = new Date().toLocaleDateString();

  const path = url.parse(req.url);
  if (path === "/favicon.ico") return;
  fs.appendFileSync("logs.txt", path.pathname + " " + date + "\n");
  const myurl = url.parse(req.url, true);
  console.log(myurl);

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
