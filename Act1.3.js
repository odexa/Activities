// STUDENT ACADEMIC MANAGEMENT SYSTEM

// 10+ CONST VARIABLES
const school = {
    name: "Northwest Samar State University",
    location: "Calbayog City, Samar"
};

const subject = {
    code: "CSElec#",
    name: "Mobile Programming 1"
};

const department = "College of Computer Studies";
const semester = "First Semester";
const academicYear = "2026-2027";
const passingGrade = 75;
const systemName = "Student Academic Management System";
const universityCode = "NwSSU";
const roomNumber = "CCIS-304";
const maxAttendance = 100;

// OBJECT LITERALS
const schoolInfo = {
    schoolName: school.name,
    city: school.location,
    department: department
};

const subjectInfo = {
    subjectCode: subject.code,
    subjectName: subject.name,
    units: 3
};

// ABSTRACTION
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    showAge() {
        console.log(`${this.name} is ${this.age} years old.`);
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
        console.log(
            `${this.name} is studying ${subject.name}.`
        );
    }

    introduce() {

        console.log(
            `Hello, I am student ${this.name} with ID ${this.studentId}.`
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
            `${this.name} is teaching ${this.subjectName}.`
        );
    }

    introduce() {

        console.log(
            `Hello, I am teacher ${this.name}.`
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

        if (this.score >= passingGrade) {
            return "Passed";
        }

        return "Failed";
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


// 10+ LET VARIABLES
let schoolYear = "2026-2027";
let totalStudents = students.length;
let totalTeachers = teachers.length;
let studentCount = 2;
let teacherCount = 2;
let highestGrade = 95;
let lowestGrade = 72;
let attendanceRate = 96;
let studentStatus = "Active";
let enrollmentStatus = "Open";
let currentRoom = "CCIS-304";
let currentSection = "BSCS-2C";

// 5+ ARROW FUNCTIONS

// Arrow Function 1
const greetStudent = (name) => {
    return `Welcome, ${name}!`;
};

// Arrow Function 2
const calculateAverage = (a, b, c) => {
    return (a + b + c) / 3;
};

// Arrow Function 3
const checkPassing = (grade) => {
    return grade >= passingGrade;
};

// Arrow Function 4
const getStudentName = (student) => {
    return student.name;
};


// Arrow Function 5
const displayTeacher = (teacher) => {
    return `${teacher.name} teaches ${teacher.subjectName}.`;
};


// Arrow Function 6
const calculateAttendance = (present, total) => {
    return (present / total) * 100;
};

// 10+ TEMPLATE LITERALS
console.log(`System: ${systemName}`);
console.log(`School: ${school.name}`);
console.log(`Location: ${school.location}`);
console.log(`Department: ${department}`);
console.log(`Academic Year: ${academicYear}`);
console.log(`Semester: ${semester}`);
console.log(`Subject: ${subject.name}`);
console.log(`Subject Code: ${subject.code}`);
console.log(`Room: ${roomNumber}`);
console.log(`University Code: ${universityCode}`);
console.log(`Passing Grade: ${passingGrade}`);
console.log(`Maximum Attendance: ${maxAttendance}%`);

// DESTRUCTURED ARRAYS
// 3 REQUIRED

// Array Destructuring 1
const studentNames = ["Odeza", "Joycel", "Maria"];
const [firstStudent, secondStudent, thirdStudent] = studentNames;
console.log(`First Student: ${firstStudent}`);


// Array Destructuring 2
const courses = [
    "Computer Science",
    "Information Technology",
    "Information Systems"
];

const [course1, course2, course3] = courses;

console.log(`Courses: ${course1}, ${course2}, ${course3}`);


// Array Destructuring 3
const scores = [90, 85, 95];

const [score1, score2, score3] = scores;

console.log(`Scores: ${score1}, ${score2}, ${score3}`);

// DESTRUCTURED OBJECT LITERALS
// 3 REQUIRED

// Object Destructuring 1
const {
    name: schoolName,
    location: schoolLocation
} = school;

console.log(`School Name: ${schoolName}`);

console.log(`School Location: ${schoolLocation}`);


// Object Destructuring 2
const {
    code: subjectCode,
    name: subjectName
} = subject;

console.log(`Subject Code: ${subjectCode}`);

console.log(`Subject Name: ${subjectName}`);


// Object Destructuring 3
const {
    name: studentFullName,
    age: studentAge,
    studentId
} = student1;

console.log(`Student: ${studentFullName}`);

console.log(`Age: ${studentAge}`);

console.log(`Student ID: ${studentId}`);

// SPREAD OPERATORS - ARRAYS
// 2 REQUIRED

const morningStudents = ["Odeza", "Joycel"];

const afternoonStudents = ["Maria", "John"];


// Array Spread 1
const allStudents = [
    ...morningStudents,
    ...afternoonStudents
];

console.log(`All Students: ${allStudents.join(", ")}`);


// Array Spread 2
const originalScores = [90, 85, 95];

const updatedScores = [
    ...originalScores,
    88,
    92
];

console.log(`Updated Scores: ${updatedScores.join(", ")}`);

// SPREAD OPERATORS - OBJECTS
// 2 REQUIRED

const basicStudent = {
    name: "Odeza",
    age: 21
};

const studentDetails = {
    studentId: "2024-001",
    course: "BS Computer Science"
};


// Object Spread 1
const completeStudent = {
    ...basicStudent,
    ...studentDetails
};

console.log(
    `Complete Student: ${completeStudent.name}, ${completeStudent.studentId}`
);


// Object Spread 2
const basicSubject = {
    code: "CSElec#",
    name: "Mobile Programming 1"
};

const subjectDetails = {
    units: 3,
    room: "CCIS-304"
};

const completeSubject = {
    ...basicSubject,
    ...subjectDetails
};

console.log(
    `Complete Subject: ${completeSubject.name}, ${completeSubject.units} units`
);


//2 ARRAYS REQUIRED

// Map Array 1
const studentDisplayNames = students.map(
    student => `Student: ${student.name}`
);

console.log("\n--- MAP 1 ---");

studentDisplayNames.forEach(
    name => console.log(name)
);


// Map Array 2
const gradeResults = grades.map(
    grade => `Grade ${grade.getScore()}: ${grade.getResult()}`
);

console.log("\n--- MAP 2 ---");

gradeResults.forEach(
    result => console.log(result)
);

// FILTER() - 2 ARRAYS REQUIRED

// Filter Array 1
const passingStudents = grades.filter(
    grade => grade.getScore() >= passingGrade
);

console.log("\n--- FILTER 1 ---");

passingStudents.forEach(
    grade => console.log(
        `Passing Grade: ${grade.getScore()}`
    )
);


// Filter Array 2
const computerScienceStudents = students.filter(
    student => student.course === "BS Computer Science"
);

console.log("\n--- FILTER 2 ---");

computerScienceStudents.forEach(
    student => console.log(
        `Computer Science Student: ${student.name}`
    )
);

// OPTIONAL CHAINING
// 2 OBJECT LITERALS REQUIRED

const studentContact = {
    email: student1.contact ? .email ? ? "No email provided",
    phone: student1.contact ? .phone ? ? "No phone provided"
};

console.log(
    `Email: ${studentContact.email}`
);

console.log(
    `Phone: ${studentContact.phone}`
);


const studentEducation = {
    course: student1.education ? .course ? ? student1.course,
    adviser: student1.education ? .adviser ? ? "Not Assigned"
};

console.log(
    `Course: ${studentEducation.course}`
);

console.log(
    `Adviser: ${studentEducation.adviser}`
);

// CONDITIONALS

console.log("\n--- CONDITIONALS ---");

if (totalStudents > 0) {

    console.log(
        `There are ${totalStudents} students enrolled.`
    );

} else {

    console.log("No students are enrolled.");

}


if (grades[0].getScore() >= passingGrade) {

    console.log(
        `The grade ${grades[0].getScore()} is passing.`
    );

} else {

    console.log(
        `The grade ${grades[0].getScore()} is failing.`
    );

}


if (schoolYear === academicYear) {

    console.log(
        `The current school year is ${schoolYear}.`
    );

} else {

    console.log("Different school year.");

}


if (totalTeachers >= 2) {

    console.log(
        `There are ${totalTeachers} teachers available.`
    );

} else {

    console.log("More teachers are needed.");

}

// LOOP 1 - FOR LOOP
console.log("\n--- STUDENTS ---");

for (let i = 0; i < students.length; i++) {

    console.log(
        `${students[i].name} - ${students[i].studentId}`
    );
}

// LOOP 2 - FOREACH
console.log("\n--- TEACHERS ---");

teachers.forEach(function(teacher) {

    console.log(
        `${teacher.name} - ${teacher.subjectName}`
    );

});

// LOOP 3 - FOR OF
console.log("\n--- GRADES ---");

for (let grade of grades) {

    console.log(
        `Score: ${grade.getScore()} - ${grade.getResult()}`
    );

}

// METHODS
console.log("\n--- METHODS ---");
student1.introduce();
student1.study();
student1.showAge();
teacher1.introduce();
teacher1.teach();

// ATTENDANCE
console.log("\n--- ATTENDANCE ---");

const attendance1 = new Attendance("Present");

console.log(
    `Attendance: ${attendance1.getStatus()}`
);

attendance1.setStatus("Absent");

console.log(
    `Updated Attendance: ${attendance1.getStatus()}`
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

// USING ARROW FUNCTIONS
console.log("\n--- ARROW FUNCTIONS ---");

console.log(
    greetStudent("Odeza")
);

console.log(
    `Average Grade: ${calculateAverage(90, 85, 95).toFixed(2)}`
);

console.log(
    `Is 90 passing? ${checkPassing(90)}`
);

console.log(
    `Student Name: ${getStudentName(student1)}`
);

console.log(
    displayTeacher(teacher1)
);

console.log(
    `Attendance Rate: ${calculateAttendance(48, 50)}%`
);

// FINAL SUMMARY
console.log("\n======================================");
console.log(`SYSTEM: ${systemName}`);
console.log(`SCHOOL: ${school.name}`);
console.log(`SCHOOL YEAR: ${academicYear}`);
console.log(`TOTAL STUDENTS: ${totalStudents}`);
console.log(`TOTAL TEACHERS: ${totalTeachers}`);
console.log(`PASSING GRADE: ${passingGrade}`);
console.log(`ATTENDANCE RATE: ${attendanceRate}%`);
console.log(`SECTION: ${currentSection}`);
console.log(`ROOM: ${currentRoom}`);
console.log(`ENROLLMENT: ${enrollmentStatus}`);
console.log("======================================");