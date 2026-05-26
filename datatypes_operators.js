// Exercise 1: Numbers
// 1. Declare integer and floating-point numbers
let integerNum = 20;
let floatNum = 5.5;

// 2. Perform operations with a number variable and another number
let addition = integerNum + 10;
let subtraction = integerNum - 5;
let multiplication = integerNum * 2;
let division = integerNum / 4;
let modulus = integerNum % 3;
let exponentiation = integerNum ** 2;

// 3. Print all your variables
console.log("--- Exercise 1: Numbers ---");
console.log("Integer:", integerNum);
console.log("Float:", floatNum);
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Exponentiation:", exponentiation);

// ---

// Exercise 2: Boolean and Operators
console.log("\n--- Exercise 2: Boolean and Operators ---");

// 1. Compare two numbers and store results in booleans
let isGreater = 5 > 3;
console.log("Is 5 greater than 3?", isGreater);

// 2. Declare x and y
let x = 8;
let y = 12;

// a - e. Comparison checks
console.log("Is x greater than y?", x > y);
console.log("Is x less than or equal to y?", x <= y);
console.log("Is x equal to y?", x === y);
console.log("Is x not equal to y?", x !== y);

// 3. Declare a and b for logical operations
let a = true;
let b = false;

console.log("a AND b:", a && b);
console.log("a OR b:", a || b);
console.log("NOT a:", !a);

// 4. Declare variable p and modify using assignment operators
let p = 10;

p += 5;
console.log("p += 5:", p);

p -= 3;
console.log("p -= 3:", p);

p *= 2;
console.log("p *= 2:", p);

p /= 4;
console.log("p /= 4:", p);

p %= 3;
console.log("p %= 3:", p);