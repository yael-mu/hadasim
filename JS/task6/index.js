function Phone(brand, model) {
    this.brand = brand;
    this.model = model;
    this.details = function () {
        console.log(`Phone [${this.brand}] [${this.model}]`);
    };
}

const p = new Phone("Samsung", "S22");
// console.log(p.details());


function Rectangle(height, width) {
    this.height = height;
    this.width = width;
    this.area = function () {
        return this.width * this.height;
    }
}

const re = new Rectangle(5, 4);
// console.log(re.area());


function BankAccount(balance, owner) {
    this.owner = owner;
    this.balance = balance;
    this.deposit = function (amount) {
        return this.balance += amount;
    }
    this.withdraw = function (amount) {
        return this.balance - amount > 0 ? this.balance -= amount : this.balance;
    }
    this.checkBalance = function () {
        console.log(this.balance);
    }
}

const b = new BankAccount(1000, "j");
// console.log(b.withdraw(10));
// console.log(b.deposit(10));
// b.checkBalance()


function Animal(name) {
    this.name = name;
    this.speek = function () {
        console.log(`the ${name} make a sound`);
    }
}

function Dog(name) {
    Animal.call(this, name);
    this.bark = function () {
        console.log(`the ${name} bark`);
    }
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog("Rex");

// dog.speek();
// dog.bark();




function Vehicle(type) {
    this.type = type;
    this.describe = function () {
        console.log(`This is a ${this.type}`);
    };
}

function Car(brand, type) {
    Vehicle.call(this, type);
    this.brand = brand;
    this.info = function () {
        console.log(`This is a ${this.brand} ${this.type}`);
    };
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const car = new Car("BMW", "car");

// car.describe();
// car.info();




function Shape() {
    this.area = function () {
        return 0;
    };
}

function Circle(radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius ** 2;
    };
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Square(side) {
    this.side = side;
    this.area = function () {
        return this.side ** 2;
    };
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

const circle = new Circle(3);
const square = new Square(4);

// console.log(circle.area());
// console.log(square.area());



class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    info() {
        console.log(`${this.title} by ${this.author}`);
    }
}

const book = new Book("The Hobbit", "Tolkien");

// book.info();



class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

class Students extends Person {
    constructor(name, school) {
        super(name);
        this.school = school;
    }
    study() {
        console.log(`${this.name} is studying at ${this.school}`);
    }
}

const student = new Students("Alice", "Oxford");

// student.greet();
// student.study();




class Employee {
    #salary;

    constructor(salary) {
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }

    work() {
        console.log("Employee is working");
    }
}

class Manager extends Employee {
    constructor(salary) {
        super(salary);
    }

    work() {
        console.log("Manager is managing");
    }
}

const employee = new Employee(4000);
const manager = new Manager(5000);

// console.log(employee.getSalary());
// employee.work();
// console.log(manager.getSalary());
// manager.work();
