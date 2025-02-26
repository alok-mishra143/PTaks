const fs = require("fs");
// fs.writeFileSync("tst.txt", "hey there");

// const result = fs.readFileSync("./tst.txt", "utf-8");
// console.log(result);

fs.appendFileSync("tst.txt", new Date().toLocaleDateString());

// fs.copyFileSync("tst.txt", "cp.txt");

// fs.unlinkSync("cp.txt");

// const st = fs.statSync("tst.txt");
// console.log(st);
