// ==================================================
// JavaScript Basics
// ==================================================

// --------------------------------------------------
// 1. Variables and Variable Declarations
// --------------------------------------------------

console.log(number1); // undefined
console.log(number2); // undefined
console.log(number3); // undefined

var number1 = 3;
// number1 = 3; // ReferenceError: number1 is not defined

var number2 = 2.9;
var number3 = 0xff;

// Strings
var firstName = "Yasmine";
var middleName = "Alaa";
var lastName = `Mohammed El-Hady`;

// Boolean
var flag = true;

console.log("This is the External JavaScript file");

// --------------------------------------------------
// 2. Data Types
// --------------------------------------------------

console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);

console.log(typeof firstName);
console.log(typeof middleName);
console.log(typeof lastName);

console.log(typeof flag);

// --------------------------------------------------
// 3. Odd vs Even
// --------------------------------------------------

let myNumber = 4869;

if (myNumber % 2 == 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

// --------------------------------------------------
// 4. Loop
// --------------------------------------------------

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// --------------------------------------------------
// 5. Positive - Negative - Zero
// --------------------------------------------------

let negNumber = -10;

if (negNumber > 0) {
  console.log("Positive Number");
} else if (negNumber < 0) {
  console.log("Negative Number");
} else {
  console.log("Zero");
}

// --------------------------------------------------
// 6. Multiplication Table
// --------------------------------------------------

let number = 8;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}

// --------------------------------------------------
// 7. Day of the Week
// --------------------------------------------------

let day = 4;

if (day == 1) {
  console.log("Sunday");
} else if (day == 2) {
  console.log("Monday");
} else if (day == 3) {
  console.log("Tuesday");
} else if (day == 4) {
  console.log("Wednesday");
} else if (day == 5) {
  console.log("Thursday");
} else if (day == 6) {
  console.log("Friday");
} else if (day == 7) {
  console.log("Saturday");
} else {
  console.log("Invalid day number");
}

// --------------------------------------------------
// 8. Weekend or Weekday
// --------------------------------------------------

if (day == 1 || day == 2) {
  console.log("Weekend");
} else if (day > 2 && day <= 7) {
  console.log("Weekday");
} else {
  console.log("Invalid day number");
}
