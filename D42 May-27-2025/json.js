const myInfo = {
    name: "Asif",
    age: 23,
    city: "Dhaka",
    country: "Bangladesh",
    myStudents: ["Turja", "Riazul", "Fazle Rabby", "Sonia"],
    myCity: () => {
        return "Dhaka";
    },
    myFriends: {
        friend1: "Turja",
        friend2: "Riazul",
        friend3: "Fazle Rabby",
        friend4: "Sonia"
    }
}

myInfo.city = "Chittaging";
myInfo.org = "Google";

console.log(myInfo.name);
console.log(myInfo.age);
console.log(myInfo.city);
console.log(myInfo.country);
console.log(myInfo.myStudents[0]);
console.log(myInfo.myStudents[1]);
console.log(myInfo.myStudents[2]);
console.log(myInfo.myStudents[3]);
console.log(myInfo.myCity());
console.log(myInfo.myFriends.friend1);
console.log(myInfo.myFriends.friend2);
console.log(myInfo.myFriends.friend3);
console.log(myInfo.myFriends.friend4);
console.log(myInfo.org);
console.log(myInfo.ufo);