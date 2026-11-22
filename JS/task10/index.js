
// JS Async Exercises with Promises and .then() Requirement
//https://docs.google.com/document/d/1Lm60fY0pVqhZRzI_vOiiHFv5gR0b_FNKCUx6cirpqZU/edit?usp=sharing

//חסר 4+5+6+7


function delayedGreet(name, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hello, ${name}!`);
        }, delay);
    });
}

// delayedGreet("Alice", 2000).then((message) => {
//     console.log(message);
// });

function readFileContent(path) {
    const fs = require("fs");
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// readFileContent("file.txt").then((content) => {
//     console.log("Content of file.txt:");
//     console.log(content);
// }).catch((err) => {
//     console.log("Error reading file:", err.message);
// });


function randomOperation() {
    return new Promise((res,rej) => {
        let num = Math.random()
        if (num > 0.5)
            res("Success!");
        else
            rej("Failure!");
    })
}

randomOperation().then((mes) => {
    console.log(mes);
}).catch((mes) => {
    console.log(mes);
})
