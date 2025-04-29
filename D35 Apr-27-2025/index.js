var age = 200;

if (age > 0 && age < 13) {
    console.log("You are a baby!");
}else if(age >= 13 && age < 20){
    console.log("You are a teenager!");
}else if(age > 20 && age < 30){
    console.log("You are a young adult!");
}else if(age > 30 && age < 50){
    console.log("You are an adult!");
}else if(age > 50 && age < 150){
    console.log("You are a senior adult!");
}else{
    console.log("You are a legend!");
}

// switch case
var city = "Chittagong";

switch (city) {
    case "Dhaka":
        console.log("You are from Dhaka!");
        break;
    case "Chittagong":
        console.log("You are from Chittagong!");
        break;
    case "Khulna":
        console.log("You are from Khulna!");
        break;
    default:
        console.log("You are from another city!");
}