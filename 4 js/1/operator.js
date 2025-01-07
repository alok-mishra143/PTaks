// Operator Description:
// Operators in JavaScript are symbols or keywords used to perform operations on values and variables. 
// These can be arithmetic, assignment, comparison, or logical operators, and they are fundamental in manipulating data.


// Example 1: Arithmetic Operator
// Arithmetic operators are used to perform basic mathematical operations like addition, subtraction, multiplication, etc.
let a = 10, b = 5;
console.log("Addition: ", a + b); // 15
console.log("Subtraction: ", a - b); // 5
console.log("Multiplication: ", a * b); // 50
console.log("Division: ", a / b); // 2
console.log("Modulus: ", a % b); // 0
console.log("Exponentiation: ", a ** b); // 100000

// Example 2: Comparison Operator
// Comparison operators are used to compare two values. They return a boolean value (true/false).
console.log("Is a equal to b? ", a == b); // false
console.log("Is a not equal to b? ", a != b); // true
console.log("Is a greater than b? ", a > b); // true
console.log("Is a less than or equal to b? ", a <= b); // false

// Example 3: Logical Operator
// Logical operators allow combining multiple conditions or expressions. 
// `&&` (AND), `||` (OR), and `!` (NOT) are the commonly used logical operators.
let x = true, y = false;
console.log("x AND y: ", x && y); // false
console.log("x OR y: ", x || y); // true
console.log("NOT x: ", !x); // false


// Conditional Description:
// Conditional statements are used to perform different actions based on different conditions. 
// They evaluate a condition (true or false) and run specific code accordingly.
// Common conditional statements include `if`, `else`, `else if`, and `switch`.


// Example 1: if...else Statement
// The `if` statement evaluates a condition. If the condition is true, the code inside the block is executed.
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Example 2: if...else if...else Statement
// Multiple conditions can be checked using `else if`. This allows multiple conditions to be evaluated in sequence.
let score = 85;
if (score >= 90) {
    console.log("You got an A!");
} else if (score >= 80) {
    console.log("You got a B!");
} else {
    console.log("You need to improve.");
}

// Example 3: switch Statement
// The `switch` statement is used to evaluate a specific expression against multiple possible cases.
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// Example 4: Ternary Operator (Shorthand if-else)
// The ternary operator is a concise way to write an `if-else` statement.
let timeOfDay = "morning";
let greeting = (timeOfDay === "morning") ? "Good morning!" : "Good evening!";
console.log(greeting); // "Good morning!"
