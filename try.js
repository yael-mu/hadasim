// function fun1() {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res("f1")
//         }, 3000)
//     })
// }

// function fun2() {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res("f2")
//         }, 3000)
//     })
// }

// function fun3() {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res("f3")
//         }, 3000)
//     })
// }

// fun1().then(result => {
//     console.log(result);
//     return fun2();
// }).then(result => {
//     console.log(result);
//     return fun3();
// }).then(result => {
//     console.log(result);
// });


fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => {
        console.log("Status:", res.status);
        return res.json();
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));