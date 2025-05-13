class myClass {
    myStd1 = "Raju";
    myStd2 = "Riaj";
    myStd3 = "Alif";
    myAllStd = [this.myStd1, this.myStd2, this.myStd3];
    printAllStd = () => {
        for(let i = 0; i < this.myAllStd.length; i++){
            console.log(this.myAllStd[i]);
        }
    }
    
    constructor (bachName, totalStudent) {
        console.log(bachName + " " + totalStudent);
    }
}

const obj = new myClass("B88A", 6);
console.log(obj.myStd1);
obj.printAllStd();