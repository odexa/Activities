// OBJECT LITERALS
const school = {
    name: "Northwest Samar State University",
    location: "Calbayog City, Samar"
};

const subject = {
    code: "CSElec#",
    name: "Mobile Programming 1"
};


// ABSTRACTION
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log("Hello, my name is " + this.name);
    }

    showAge() {
        console.log(this.name + " is " + this.age + " years old.");
    }
}


// INHERITANCE 1
class Student extends Person {

    constructor(name, age, studentId, course) {
        super(name, age);
        this.studentId = studentId;
        this.course = course;
    }

    study() {
        console.log(this.name + " is studying " + subject.name);
    }

    introduce() {
        console.log(
            "Hello, I am student " +
            this.name +
            " with ID " +
            this.studentId
        );
    }
}


// INHERITANCE 2
class Teacher extends Person {

    constructor(name, age, subjectName, employeeId) {
        super(name, age);
        this.subjectName = subjectName;
        this.employeeId = employeeId;
    }

    teach() {
        console.log(
            this.name +
            " is teaching " +
            this.subjectName
        );
    }

    introduce() {
        console.log(
            "Hello, I am teacher " +
            this.name
        );
    }
}


// ENCAPSULATION 1
class Grade {

    constructor(score) {
        this.score = score;
    }

    getScore() {
        return this.score;
    }

    getResult() {

        if (this.score >= 75) {
            return "Passed";
        } else {
            return "Failed";
        }
    }

    setScore(score) {
        this.score = score;
    }
}


// ENCAPSULATION 2
class Attendance {

    constructor(status) {
        this.status = status;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }
}


// 4 OBJECTS
const student1 = new Student(
    "Odeza",
    21,
    "2024-001",
    "BS Computer Science"
);

const student2 = new Student(
    "Joycel",
    20,
    "2024-002",
    "BS Computer Science"
);

const teacher1 = new Teacher(
    "Mrs. Jimaol",
    35,
    "Programming Languages",
    "T-001"
);

const teacher2 = new Teacher(
    "Ms. You",
    32,
    "Software Engineering",
    "T-002"
);


// 3 ARRAYS
const students = [
    student1,
    student2
];

const teachers = [
    teacher1,
    teacher2
];

const grades = [
    new Grade(90),
    new Grade(72),
    new Grade(85)
];


// VARIABLES
let schoolYear = "2026-2027";
let totalStudents = students.length;
let passingGrade = 75;
let totalTeachers = teachers.length;


// CONDITIONALS
if (totalStudents > 0) {
    console.log("There are students enrolled.");
} else {
    console.log("No students are enrolled.");
}

if (grades[0].getScore() >= passingGrade) {
    console.log("The student passed.");
} else {
    console.log("The student failed.");
}

if (schoolYear === "2026-2027") {
    console.log("Current school year.");
} else {
    console.log("Previous school year.");
}

if (totalTeachers >= 2) {
    console.log("There are enough teachers.");
} else {
    console.log("More teachers are needed.");
}


// LOOP 1
console.log("\n--- STUDENTS ---");

for (let i = 0; i < students.length; i++) {

    console.log(
        students[i].name +
        " - " +
        students[i].studentId
    );
}


// LOOP 2
console.log("\n--- TEACHERS ---");

teachers.forEach(function(teacher) {

    console.log(
        teacher.name +
        " - " +
        teacher.subjectName
    );
});


// LOOP 3
console.log("\n--- GRADES ---");

for (let grade of grades) {

    console.log(
        "Score: " +
        grade.getScore() +
        " - " +
        grade.getResult()
    );
}


// METHODS
student1.introduce();

student1.study();

student1.showAge();

teacher1.introduce();

teacher1.teach();


// ATTENDANCE
const attendance1 = new Attendance("Present");

console.log(
    "Attendance: " +
    attendance1.getStatus()
);

attendance1.setStatus("Absent");

console.log(
    "Updated Attendance: " +
    attendance1.getStatus()
);


// POLYMORPHISM
console.log("\n--- POLYMORPHISM ---");

const people = [
    student1,
    teacher1
];

for (let person of people) {
    person.introduce();
}