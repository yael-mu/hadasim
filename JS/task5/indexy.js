function Returner(){
    this.name="nnn"
    this.age=42
}

const r=new Returner();
console.log(r);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hi my name is ${this.name} and my age is ${this.age}`);
    }
}

class Student extends Person {
    constructor(classes, name, age) {
        super(name, age)
        this.classes = classes;
    }
}

const s = new Student(["math"], "yishai", 36)
s.a("jjij");
