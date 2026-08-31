// ==================================================
// Task 4: Functions and Methods
// ==================================================


// ==================================================
// Task 1: Bottle Game
// ==================================================

const bottleGame = function (persons) {
  const range = persons.length;

  const firstPerson = Math.floor(Math.random() * range);
  let secondPerson = Math.floor(Math.random() * range);

  // Make sure the two selected persons are different
  while (secondPerson === firstPerson) {
    secondPerson = Math.floor(Math.random() * range);
  }

  return [persons[firstPerson], persons[secondPerson]];
};

const persons = ["Ahmed", "Islam", "Sandra", "Fatima", "Ali"];

console.log(bottleGame(persons));


// ==================================================
// Task 2.1: Format Full Name
// ==================================================

const fullName = function (fullNameNow) {
  const nameWords = fullNameNow.trim().split(" ");
  let newFullName = "";

  newFullName += nameWords[0].toUpperCase() + " ";

  for (let index = 1; index < nameWords.length; index++) {
    newFullName +=
      nameWords[index][0].toUpperCase() +
      nameWords[index].slice(1).toLowerCase();

    if (index !== nameWords.length - 1) {
      newFullName += " ";
    }
  }

  return newFullName;
};

console.log(fullName("the quick brown fox"));


// ==================================================
// Task 2.2: Find the Longest Word
// ==================================================

const longestWord = function (sentence) {
  const words = sentence.split(" ");

  let maxLength = 0;
  let targetWord = "";

  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      targetWord = word;
    }
  }

  return targetWord;
};

console.log(longestWord("Web Development Tutorial"));


// ==================================================
// Task 2.3: Alphabetical Order
// ==================================================

const alphaOrder = function (string) {
  const chars = string.split("");

  chars.sort();

  return chars.join("");
};

console.log(alphaOrder("javascript"));


// ==================================================
// Task 2.4: Get Month Name
// ==================================================

const getMonthName = function (myDate) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthNumber = myDate.getMonth();

  return months[monthNumber];
};

const myDate = new Date("2026-07-29");

console.log(getMonthName(myDate));


// ==================================================
// Task 2.5: Calculate Circle Area
// ==================================================

const circleArea = function (radius) {
  return Math.PI * Math.pow(radius, 2);
};

console.log(circleArea(5));
