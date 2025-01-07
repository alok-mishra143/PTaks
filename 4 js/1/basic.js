// JavaScript is a loosely typed or dynamic language, meaning variables are not directly associated with any specific data type. A variable can hold any type of value. Understanding the different data types in JavaScript is crucial for building robust and efficient applications. Below are the key points, detailed descriptions, and examples of the data types in JavaScript:


// how to print in js

console.log("hello world from console.log ");


// var let const

//-----------------------------------------------------------------------------------------------------------------------------
// var
// var is a way to declare variables in JavaScript. It has function scope or global scope if declared outside a function. It can be redeclared and reassigned within the same scope.
  
// Advantage: 
// - var is supported by all JavaScript environments, even older ones. 
// - Can be redeclared and reassigned easily.
  
// Disadvantage:
// - Since var is function-scoped, it can lead to unexpected behavior when used inside loops or blocks.
// - Hoisting can lead to bugs because it's initialized as `undefined` and not assigned until later.

// Example:
var x = 10;
var x = 20;  // No error, redeclared in the same scope
console.log(x);  // Output: 20

//-----------------------------------------------------------------------------------------------------------------------------

// let
// let is used to declare variables with block scope. Unlike var, it cannot be redeclared in the same block but can be reassigned.


// Advantage:
// - More predictable because of block scoping (avoids issues with variable leakage outside of loops and blocks).
// - Can be reassigned, so it’s flexible for changing values during execution.
  
// Disadvantage:
// - Cannot be redeclared in the same block, which may cause issues if the variable needs to be declared again in different parts of the same block.


// Example:
let y = 10;
y = 20;  // No error, reassigned to 20
console.log(y);  // Output: 20

//-----------------------------------------------------------------------------------------------------------------------------


// const
// const is used to declare constants in JavaScript. It has block scope like let but cannot be reassigned after initialization. Once a value is assigned to a const variable, it cannot be changed.

// Advantage:
// - Guarantees that the variable value won't be changed, which can help avoid bugs and ensure data integrity.
// - Useful when working with values that should remain constant, such as configuration settings or data that should not be altered.


// Disadvantage:
// - Cannot be reassigned, which can limit flexibility if you need to change the value later on.
// - Hoisting also applies, and you can’t use the variable before it's declared.


// Example:
const z = 10;
z = 20;  // Error: Assignment to constant variable
console.log(z);  // This line will not execute due to the error above

//-----------------------------------------------------------------------------------------------------------------------------
// **********************************************************************************************************


// Reserved Keywords in js 

// abstract, arguments, await, boolean, break
// byte, case, catch, char, class
// const, continue, debugger, default, delete
// do, double, else, enum, eval
// export, extends, false, final, finally
// float, for, function, goto, if
// implements, import, in, instanceof, int
// interface, let, long, native, new
// null, package, private, protected, public
// return, short, static, super, switch
// synchronized, this, throw, throws, transient
// true, try, typeof, var, void
// volatile, while, with, yield
// let, var, const, if, else
// switch, case, default, for, while
// do, continue, break, return, try
// catch, finally, throw, import, export
// class, function, async, await, extends
// super, this, undefined, null, boolean
// number, string, symbol, bigint, new
// delete, in, instanceof, typeof, void
// yield, package, interface, implements, public
// private, protected, static, enum










