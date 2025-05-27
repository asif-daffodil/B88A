const studentList = [
    {
        name: "Turja",
        age: 23,
        city: "Dhaka"
    },
    {
        name: "Riazul",
        age: 23,
        city: "Dhaka"
    },
    {
        name: "Fazle Rabby",
        age: 23,
        city: "Dhaka"
    },
    {
        name: "Sonia",
        age: 23,
        city: "Dhaka"
    }
];

// print the values with loop
for (let i = 0; i < studentList.length; i++) {
    console.log(studentList[i].name);
    console.log(studentList[i].age);
    console.log(studentList[i].city);
}

// print the values with forEach
studentList.forEach((student) => {
    console.log(student.name);
    console.log(student.age);
    console.log(student.city);
});

// print the values with for of
for (let student of studentList) {
    console.log(student.name);
    console.log(student.age);
    console.log(student.city);
}

// print the values with for in
for (let student in studentList) {
    console.log(studentList[student].name);
    console.log(studentList[student].age);
    console.log(studentList[student].city);
}