const task1 = () => {
    const arr = [10, 20, 30, 40, 50];
    let sum = 0;
    for (let i = 1; i < arr.length; i += 2) {
        sum += i = arr[i];
    }
    console.log(sum);
}

const task2 = () => {
    const arr = [10, 20, 30, 40, 50];
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
        else if (arr[i] < min)
            min = arr[i];
    }
    console.log(max - min);
}

const task3 = (str) => {
    const newStr = str.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
    console.log(newStr); 
}

const task4 = (obj, x) => {
    const newObj=Object.values(obj).filter(value => value > x).length;
    console.log(newObj);
    
}

const task5 = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

const task6 = () => {
    class Student {
        constructor(name, grade) {
            this.name = name;
            this.grade = grade;
        }
    }

    const task6Filter = (arr) => {
        const newArr = arr.filter(s => s.grade >= 60);
        console.log(newArr);
    }
    task6Filter([new Student("A", 75), new Student("B", 50)])
}

const task7 = (arr) => {
    const newArr = [];
    let sum = 1
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                sum *= arr[j];
            }
        }
        newArr.push(sum);
        sum = 1;
    }
    console.log(newArr);
}

const task8 = (str) => {
    let max = 0;
    let index = 0;
    const arr = str.split(" ")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
            index = i
        }
    }
    console.log(arr[index]);
}

const task9 = (obj) => {
    const newObj = {};
    Object.keys(obj).forEach(key => {
        newObj[obj[key]] = key;
    });
    console.log(newObj);
};

const task10 = () => {
    class BankAccount {
        constructor(balance) {
            this.balance = balance;
        }
        deposit(amount) {
            this.balance += amount;
        }
        withdraw(amount) {
            if (amount > this.balance) {
                console.log("Error: Insufficient funds");
            } else {
                this.balance -= amount;
            }
        }
    }
    const b = new BankAccount(100)
    b.deposit(50);
    b.withdraw(40)
    console.log(b);
}

task1()
task2()
task3("yael munsa");
task4({ a: 5, b: 12, c: 8 }, 7);
task5([1, 2, 3, 4, 5])
task6()
task7([2, 3, 4])
task8("qwe asdf zxcvb fgh")
task9({ a: "one", b: "two" });
task10()
