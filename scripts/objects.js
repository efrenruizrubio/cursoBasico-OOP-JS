const natalia = {
  name: "Natalia",
  age: 20,
  approvedCourses: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};

function Student(name, age, approvedCourses) {
  /* this.approveCourse = function (newCourse) {
    this.approvedCourses.push(newCourse);
  }; */
}

Student.prototype.approveCourse = function (newCourse) {
  this.approvedCourses.push(newCourse);
};

const juanita = new Student("Juanita", 15, [
  "Curso Definitivo de HTML y CSS",
  "Curso Práctico de HTML y CSS",
]);

class StudentClass {
  constructor({ name, age, approvedCourses }) {
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const miguelito = new StudentClass({
  name: "Miguel",
  age: 28,
  approvedCourses: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
});
