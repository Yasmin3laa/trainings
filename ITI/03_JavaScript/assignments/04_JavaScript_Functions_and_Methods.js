// ================================================== Task 1 ==================================================
const bottleGame = function (persons) {
  let range = persons.length;
  let firstPerson = Math.floor(Math.random() * range);
  let secondPerson = Math.floor(Math.random() * range);

  let chosenPersons = [];
  chosenPersons.push(persons[firstPerson]);
  chosenPersons.push(persons[secondPerson]);

  return chosenPersons;
};

const persons = ["Ahmed", "Islam", "Sandra", "Fatima", "Ali"];

// console.log(bottleGame(persons).toString());
console.log(bottleGame(persons));

// ================================================== Task 2 ==================================================
// 1---------------------------------------------------------
const fullName = function (fullNameNow) {
  let nameWords = fullNameNow.split(" ");
  let newfullName = "";
  newfullName += nameWords[0].toUpperCase() + " ";

  for (let index = 1; index < nameWords.length; index++) {
    newfullName +=
      nameWords[index][0].toUpperCase() +
      nameWords[index].slice(1).toLowerCase();

    if (index != nameWords.length - 1) {
      newfullName += " ";
    }
  }

  return newfullName;
};

console.log(fullName("the quick brown gox"));

// 2---------------------------------------------------------
const longestWord = function (sentence) {
  let words = sentence.split(" ");
  let maxLength = 0;
  let targetWord = "";

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      targetWord = word;
    }
  }

  return targetWord;
};

console.log(longestWord("Web Development Tutorial"));

// 3---------------------------------------------------------
const alphaOrder = function (string) {
  let chars = string.split("");
  chars.sort();
  let newString = chars.join("");

  return newString;
};

console.log(alphaOrder("javascript"));

// 4---------------------------------------------------------
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
  monthNumber = myDate.getMonth();

  return months[monthNumber];
};

let myDate = new Date("2026-07-29");
console.log(getMonthName(myDate));

// 5---------------------------------------------------------
const circleArea = function (raduis) {
  return Math.PI * Math.pow(raduis, 2);
};

console.log(circleArea(5));
