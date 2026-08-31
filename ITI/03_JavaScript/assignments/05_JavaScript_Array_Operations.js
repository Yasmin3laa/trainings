// ================================================== Get Array Size ==================================================
const getArraySize = function () {
  let myArraySize;
  while (true) {
    myArraySize = prompt("Enter the size of your array:");
    if (isNaN(myArraySize) || myArraySize == "") {
      alert("Please enter a valid numeric value.");
      continue;
    }
    myArraySize = +myArraySize;
    break;
  }

  return myArraySize;
};


// ================================================== Get Array Elements ==================================================
const getArrayElements = function (myArraySize) {
  const myArray = [];
  for (let index = 0; index < myArraySize; index++) {
    let num;
    while (true) {
      num = prompt(`Enter element No.${index + 1}:`);
      if (isNaN(num) || num == "") {
        alert("Please enter a valid numeric value.");
        continue;
      }
      num = +num;
      break;
    }
    myArray[index] = num;
  }

  return myArray;
};


// ================================================== Get Letter ==================================================
const getLetter = function () {
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let letter;
  while (true) {
    letter = prompt(
      "Enter one letter from [a, b, c, d, e, f, g]:\na: display original array\nb: sort ascending\nc: sort descending order\nd: reverse original array\ne: display even numbers\nf: display all numbers divisible by a user number\ng: display 30% discount\nh: display string represents array concated with ***",
    );
    if (!letters.includes(letter.toLowerCase()) || letter == "") {
      alert("Please enter a valid letter (a, b, c, d, e, f, g, h).");
      continue;
    }
    break;
  }

  return letter.toLowerCase();
};


// ================================================== Case Letter A ==================================================
const letterA = function (myArrayElements) {
  console.log(myArrayElements.toString());
};


// ================================================== Case Letter B ==================================================
const letterB = function (myArrayElements) {
  const ascOrder = myArrayElements.toSorted((a, b) => a - b);
  console.log(ascOrder.toString());
};


// ================================================== Case Letter C ==================================================
const letterC = function (myArrayElements) {
  const descOrder = myArrayElements.toSorted((a, b) => b - a);
  console.log(descOrder.toString());
};


// ================================================== Case Letter D ==================================================
const letterD = function (myArrayElements) {
  const reversedArrayVersion = myArrayElements.toReversed();
  console.log(reversedArrayVersion.toString());
};


// ================================================== Case Letter E ==================================================
const letterE = function (myArrayElements) {
  const evenNumbers = myArrayElements.filter((value) => value % 2 == 0);
  if (evenNumbers.length == 0) {
    alert("No even numbers found.");
  } else {
    console.log(evenNumbers.toString());
  }
};


// ================================================== Case Letter F ==================================================
const letterF = function (myArrayElements) {
  let userNumber;
  while (true) {
    userNumber = prompt("Enter number:");
    if (isNaN(userNumber) || userNumber == "") {
      alert("Please enter a valid numeric value.");
      continue;
    }
    userNumber = +userNumber;
    break;
  }

  const divisibleByNumber = myArrayElements.filter(
    (value) => value % userNumber == 0,
  );
  if (divisibleByNumber.length == 0) {
    alert(`There are no numbers divisible by ${userNumber}.`);
  } else {
    console.log(divisibleByNumber.toString());
  }
};


// ================================================== Case Letter G ==================================================
const letterG = function (myArrayElements) {
  const discount = myArrayElements.map((value) => value * 0.7);
  console.log(discount.toString());
};


// ================================================== Case Letter H ==================================================
const letterH = function (myArrayElements) {
  let string = myArrayElements.join("***");
  console.log(string);
};


// ================================================== Processing Function ==================================================
const processing = function (myLetter, myArrayElements) {
  switch (myLetter) {
    case "a":
      letterA(myArrayElements);
      break;
    case "b":
      letterB(myArrayElements);
      break;
    case "c":
      letterC(myArrayElements);
      break;
    case "d":
      letterD(myArrayElements);
      break;
    case "e":
      letterE(myArrayElements);
      break;
    case "f":
      letterF(myArrayElements);
      break;
    case "g":
      letterG(myArrayElements);
      break;
    case "h":
      letterH(myArrayElements);
      break;
  }
};


// ================================================== Main Function ==================================================
const main = function () {
  const myArraySize = getArraySize();
  //   console.log(myArraySize);

  const myArrayElements = getArrayElements(myArraySize);
  //   console.log(myArray);

  let myLetter = getLetter();
  //   console.log(myLetter);

  while (true) {
    processing(myLetter, myArrayElements);
    let askUser = prompt("Do you want to repeate running (Yes/No) ?");
    if (askUser.toLowerCase() == "yes") {
      myLetter = getLetter();
    } else if (askUser.toLowerCase() == "no") {
      break;
    } else {
      alert("Invalid Input (only Yes or No)! Try again.");
    }
  }
};

main();
