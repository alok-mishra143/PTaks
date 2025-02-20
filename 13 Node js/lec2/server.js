// import * as note from "./note.js";
import _ from "lodash";

// import fs from "fs";
// import os from "os";

// const user = os.userInfo();

// console.log(note.age);
// console.log(note.addNumber(2, 5));

// fs.appendFile("greet.txt", `Hello  ${user.username} \n`, () =>
//   console.log("file created")
// );

const arr = [1, 2, 3, 4, 0, false, 1, 2, true, "hello", "alok", 1.3];

console.log(
  _.findLastIndex(arr, function (o) {
    return o === 2;
  })
);

// console.log(arr);
