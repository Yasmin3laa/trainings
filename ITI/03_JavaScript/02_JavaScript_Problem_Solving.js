// ================================================== Task 1 ==================================================
const task1 = function () {
  // 1.1 Ask the user to enter a message
  let userMessage = prompt("Enter a message: ");

  // then display it using the different html heading tags (from <h1> to <h6>) using Loops.
  // DO NOT write the header element explicitly in your script!
  for (let i = 1; i <= 6; i++) {
    document.write(`<h${i}>${i}: ${userMessage}</h${i}>`);
  }
};

// task1();

// ================================================== Task 2 ==================================================
// 1.2 Write a script that takes from the user n values and returns their sum,
// stop receiving values from user when he enters 0 or sum exceeds 100,
// check that the entered data is numeric and inform the user with the total sum of the entered values.
const task2 = function () {
  let sumNums = 0;
  while (true) {
    let userNums = prompt("Enter a number (0 to stop):");
    if (isNaN(userNums) || userNums == "") {
      alert("Please enter a valid numeric value.");
      continue;
    }

    userNums = Number(userNums);
    sumNums += userNums;
    if (userNums == 0 || sumNums > 100) {
      break;
    }
    // console.log(`Total sum = ${sumNums}`);
  }

  alert(`Total sum = ${sumNums}`);
};

// task2();

// ================================================== Task 3 ==================================================
// Fill an array of 3 elements from the user,
// and apply each of the following mathematical operations on it (+, *, /).
let task3 = function () {
  let num1, num2, num3;
  while (true) {
    num1 = prompt("Enter the first number:");
    if (isNaN(num1) || num1 == "") {
      alert("Please enter a valid numeric value.");
      continue;
    }
    if (num1 == 0) {
      alert("Please enter a non-zero value.");
      continue;
    }
    break;
  }
  num1 = Number(num1);

  while (true) {
    num2 = prompt("Enter the second number:");
    if (isNaN(num2) || num2 == "") {
      alert("Please enter a valid numeric value.");
      continue;
    }
    if (num2 == 0) {
      alert("Please enter a non-zero value, Division by zero not allowed.");
      continue;
    }
    break;
  }
  num2 = Number(num2);

  while (true) {
    num3 = prompt("Enter the third number:");
    if (isNaN(num3) || num3 == "") {
      alert("Please enter a valid numeric value.");
      continue;
    }
    if (num3 == 0) {
      alert("Please enter a non-zero value, Division by zero not allowed.");
      continue;
    }
    break;
  }
  num3 = Number(num3);

  document.write(
    `<h1>sum of the 3 values = ${num1} + ${num2} + ${num3} = ${num1 + num2 + num3}</h1>`,
  );
  document.write(
    `<h1>multiplication of the 3 values = ${num1} * ${num2} * ${num3} = ${num1 * num2 * num3}</h1>`,
  );
  document.write(
    `<h1>division of the 3 values = ${num1} / ${num2} / ${num3} = ${num1 / num2 / num3}</h1>`,
  );
};

// task3();
