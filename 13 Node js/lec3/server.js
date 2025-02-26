// const JsonString = '{"name":"alok", "age":30, "city":"surat"}';
// console.log("this is Json String", JsonString);

// const jsSfy = JSON.parse(JsonString);
// console.log("this is jsSfy ", jsSfy);

// console.log(jsSfy.name);

// const obj = {
//   name: "alok",
//   age: 30,
//   city: "surat",
// };

// console.log(typeof obj);

// const json = JSON.stringify(obj);
// console.log(json);
// console.log(typeof json);

// * creating server using node js

// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.writeHead(201, { "Content-Type": "text/plain" });

//   res.end("hello world from Node Js");
// });

// server.listen(3000);

// *Creating server usng Express

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("hello");
});

app.get("/test", (req, res) => {
  res.send("this is tets");
});

app.listen(3000, function () {
  console.log("server is listing http://localhost:3000");
});
