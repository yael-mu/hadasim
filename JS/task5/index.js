const extractNumbers = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error("Input is not an array");
    }
    const newArr = arr.filter((element) => typeof element === "number");
    return newArr;
};

console.log(extractNumbers("1"));
console.log(extractNumbers([1, "hi", 5]));

const sumNumbersSafe = (arr) => {
    let newArr = [];
    try {
        newArr = extractNumbers(arr);
    }
    catch (error) {
        console.log(error.message);
        return 0;
    }
    let sum = 0;
    newArr.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(sumNumbersSafe("l"));
console.log(sumNumbersSafe([1, 2, 3]));


const filterLargeSums = (arrList, minTotal) => {
    const result = [];
    arrList.forEach((arr) => {
        const sum = sumNumbersSafe(arr);
        if (sum >= minTotal) {
            result.push(arr);
        }
    });
    return result;
}

console.log(filterLargeSums([[1,2,3], [10,"bad",5], "fail"], 10));

const summaryStats = (arrList) => {
    const filteredArrays = filterLargeSums(arrList, 10);
    const objArr = []

    filteredArrays.forEach(element => {
        const obj = {
            sum: sumNumbersSafe(element),
            average: sumNumbersSafe(element) / element.length,
        }
        objArr.push(obj);
    });
    return objArr;
}

console.log(summaryStats([[1, 2, 3], [5, 5, 5], [100], "bad"]));


const Calculator = (a, b, operation) => {
    if (typeof a !== "number" || typeof b !== "number" && typeof a !== typeof b !== "number") {
        throw new Error("Both a and b must be numbers");
    }
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;
        default:
            throw new Error("Invalid operation");
    }
}

console.log(Calculator(10, "d", "add"));