class myStudents {
    // properties
    myName = "Asif";
    names = ["Turja", "Riazul", "Fazle Rabby", "Sonia"];

    // methods
    printName() {
        return this.myName;
    }

    constructor(city, country) {
        console.log(`I live in ${city}, ${country}`);
    }
}

const students = new myStudents("Dhaka", "Bangladesh");
console.log(students.myName);
console.log(students.printName());
console.log(students.names[0]);