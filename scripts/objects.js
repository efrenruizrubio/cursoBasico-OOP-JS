function videoPlay(id) {
  const secretUrl = `https://platzi.com/${id}`;
  console.log(`Playing video from ${secretUrl}`);
}
function videoStop(id) {
  const secretUrl = `https://platzi.com/${id}`;
  console.log(`Stopping video from ${secretUrl}`);
}

class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }
  play() {
    videoPlay(this.videoID);
  }
  pause() {
    videoStop(this.videoID);
  }
}

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

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos."
      );
    }
  }
}
class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés."
      );
    }
  }
}
class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

class Course {
  constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName === "Curso Malito de Programación Básica") console.error("No");
    else this._name = newName;
  }
}

const courseProgBasica = new Course({
  name: "Curso de Programación Básica",
  isFree: true,
});

const courseDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});

const coursePracticoHTML = new Course({
  name: "Curso Práctico de HTML y CSS",
  lang: "english",
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

const juan = new FreeStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [escuelaWeb, escuelaVideojuegos],
});

const miguelito = new BasicStudent({
  name: "Miguelito",
  username: "miguelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "miguelito_feliz",
  learningPaths: [escuelaWeb, escuelaData],
});
