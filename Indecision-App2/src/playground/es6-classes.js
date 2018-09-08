class Person{
    constructor(name="anonymous", age =0){
        this.name = name;
        this.age = age;
    }

    getDescription(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person{
    constructor(name, age, major="N/A"){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let superDescription = super.getDescription();
        if(this.hasMajor()){
            superDescription += ` Major: ${this.major}`
        }
        return superDescription;
    }
}


const person1 = new Student("Tenzin", 23, "CompSci");
console.log(person1.getDescription());
const person2 = new Person("Bob");
console.log(person2.getDescription());
