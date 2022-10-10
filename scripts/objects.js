class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }
}

const courseProgBasica = new Course({
  name: "Curso de Programación Básica",
});

const courseDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});

const coursePracticoHTML = new Course({
  name: "Curso Práctico de HTML y CSS",
});

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [courseProgBasica, courseDefinitivoHTML, coursePracticoHTML],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [courseProgBasica, "Curso DataBusiness", "Curso DataViz"],
});

const escuelaVideojuegos = new LearningPath({
  name: "Escuela de Videojuegos",
  courses: [courseProgBasica, "Curso de Unity", "Curso de Unreal Engine"],
});

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [escuelaWeb, escuelaVideojuegos],
});

const miguelito = new Student({
  name: "Miguelito",
  username: "miguelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "miguelito_feliz",
  learningPaths: [escuelaWeb, escuelaData],
});
