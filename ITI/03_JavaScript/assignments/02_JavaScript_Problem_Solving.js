// ==================================================
// Task 1: Display Message Using Heading Tags
// ==================================================

const task1 = function () {
  // Ask the user to enter a message
  let userMessage = prompt("Enter a message:");

  // Display the message using <h1> to <h6>
  // without writing the heading elements explicitly
  for (let i = 1; i <= 6; i++) {
    document.write(`<h${i}>${i}: ${userMessage}</h${i}>`);
  }
};

// task1();


// ==================================================
// Task 2: Sum User Input
// ==================================================

// Ask the user for n values and calculate their sum.
// Stop when:
// - The user enters 0
// - The sum exceeds 100
// - Invalid input is entered

const task2 = function () {
  let sumNums = 0;

  while (true) {
    let userNums = prompt("Enter a number (0 to stop):");

    if (isNaN(userNums) || userNums.trim() === "") {
      alert("Please enter a valid numeric value.");
      continue;
    }

    userNums = Number(userNums);
    sumNums += userNums;

    if (userNums === 0 || sumNums > 100) {
      break;
    }
  }

  alert(`Total sum = ${sumNums}`);
};

// task2();


// ==================================================
// Task 3: Mathematical Operations on 3 Numbers
// ==================================================

// Fill an array of 3 elements from the user,
// then apply:
// - Addition
// - Multiplication
// - Division

const task3 = function () {
  let numbers = [];

  for (let i = 0; i < 3; i++) {
    while (true) {
      let userNumber = prompt(`Enter number ${i + 1}:`);

      if (isNaN(userNumber) || userNumber.trim() === "") {
        alert("Please enter a valid numeric value.");
        continue;
      }

      userNumber = Number(userNumber);

      if (userNumber === 0) {
        alert("Please enter a non-zero value because division by zero is not allowed.");
        continue;
      }

      numbers.push(userNumber);
      break;
    }
  }

  let [num1, num2, num3] = numbers;

  document.write(
    `<h1>Sum = ${num1} + ${num2} + ${num3} = ${num1 + num2 + num3}</h1>`
  );

  document.write(
    `<h1>Multiplication = ${num1} * ${num2} * ${num3} = ${
      num1 * num2 * num3
    }</h1>`
  );

  document.write(
    `<h1>Division = ${num1} / ${num2} / ${num3} = ${
      num1 / num2 / num3
    }</h1>`
  );
};

// task3();
