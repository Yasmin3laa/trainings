// ==================================================
// Task 3: JavaScript Objects
// ==================================================

const student = {
  name: "Yasmine",
  age: 20,

  subjects: [
    {
      subjectName: "Algorithms",
      subjectScore: 96,
    },
    {
      subjectName: "Math",
      subjectScore: 100,
    },
    {
      subjectName: "English",
      subjectScore: 90,
    },
  ],

  // Convert student object to a readable string
  toString() {
    let subjects = "";

    for (let i = 0; i < this.subjects.length; i++) {
      subjects += `    { subjectName: ${this.subjects[i].subjectName}, subjectScore: ${this.subjects[i].subjectScore} }`;

      if (i !== this.subjects.length - 1) {
        subjects += ",";
      }

      subjects += "\n";
    }

    return `{
  name: "${this.name}",
  age: ${this.age},
  subjects: [
${subjects}  ]
}`;
  },
};


// ==================================================
// Task 3.1: Calculate Total Grade
// ==================================================

const getTotalGrade = function (student) {
  const fullGrade = student.subjects.length * 100;
  let totalGrade = 0;

  for (let i = 0; i < student.subjects.length; i++) {
    totalGrade += student.subjects[i].subjectScore;
  }

  return Math.round((totalGrade / fullGrade) * 100);
};


// ==================================================
// Task 3.2: Calculate Average Grade
// ==================================================

const getAverageGrade = function (student) {
  let totalGrade = 0;

  for (let i = 0; i < student.subjects.length; i++) {
    totalGrade += student.subjects[i].subjectScore;
  }

  return Math.round(totalGrade / student.subjects.length);
};


// ==================================================
// Task 3.3: Clone Student Object
// ==================================================

const studentClone = { ...student };


// ==================================================
// Output
// ==================================================

console.log("Student:", student);
console.log("Total Grade (%):", getTotalGrade(student));
console.log("Average Grade:", getAverageGrade(student));
console.log("Cloned Student:", studentClone);
