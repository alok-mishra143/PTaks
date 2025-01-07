// 1. Primitive Data Types
// Primitive data types are immutable and represent a single value. They are directly assigned to a variable.

// a) Number
let num = 42; // Integer
let pi = 3.14; // Floating-point
let infinityExample = 1 / 0; // Infinity
let nanExample = 'abc' / 2; // NaN
console.log(num, pi, infinityExample, nanExample); // 42, 3.14, Infinity, NaN

// b) String
let name = "John";
let greeting = `Hello, ${name}`; // Template literal
console.log(name, greeting); // "John", "Hello, John"

// c) Boolean
let isValid = true;
let isComplete = false;
console.log(isValid, isComplete); // true, false

// d) Undefined
let x;
console.log(x); // undefined

// e) Null
let data = null;
console.log(data, typeof data); // null, "object"

// f) Symbol
let sym = Symbol('description');
console.log(sym); // Symbol(description)

// g) BigInt
let big = 123456789012345678901234567890n;
console.log(big); // 123456789012345678901234567890n

// 2. Non-Primitive (Reference) Data Types
// Reference data types store references to their values in memory. They are mutable.

// a) Object
let obj = { name: "Alice", age: 25 };
console.log(obj.name, obj.age); // "Alice", 25

// b) Array
let arr = [1, 2, 3, "apple"];
arr.push("banana"); // Add element
console.log(arr); // [1, 2, 3, "apple", "banana"]

// c) Function
function add(a, b) { return a + b; }
let result = add(2, 3);
console.log(result); // 5

// 3. Special Objects
// a) Date
let now = new Date();
console.log(now.toISOString()); // Current date in ISO format

// b) RegExp
let regex = /abc/;
console.log(regex.test("abcdef")); // true





