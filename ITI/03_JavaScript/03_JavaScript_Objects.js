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
  toString() {
    let subjs = "";
    for (let i = 0; i < this.subjects.length; i++) {
      subjs += `  {subjectName: ${this.subjects[i].subjectName}, subjectScore: ${this.subjects[i].subjectScore}}`;
      if (i != this.subjects.length - 1) {
        subjs += `,`;
      }
      subjs += `\n`;
    }
    return `{
  name: "${this.name}",
  age: ${this.age},
  subjects: [
    ${subjs}
  ]
}`;
  },
};

const getTotalGrade = function (student) {
  const fullGrade = student.subjects.length * 100;
  let totalGrade = 0;
  for (let i = 0; i < student.subjects.length; i++) {
    totalGrade += student.subjects[i].subjectScore;
  }
  return Math.round((totalGrade / fullGrade) * 100);
};

const getAverageGrade = function (student) {
  let totalGrade = 0;
  for (let i = 0; i < student.subjects.length; i++) {
    totalGrade += student.subjects[i].subjectScore;
  }
  return Math.round(totalGrade / student.subjects.length);
};

const studentClone = { ...student };

console.log("Student:", student);
console.log("Total Grade (%):", getTotalGrade(student));
console.log("Average Grade:", getAverageGrade(student));
console.log("Cloned Student:", studentClone);
