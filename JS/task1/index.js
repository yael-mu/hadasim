//1
const num = 12345
let num1 = 0
for (let i = 0; i < num.toString().length; i++) {
    num1 += parseInt(num.toString()[i])
}
console.log(`Sum of digits: ${num1}`)

//2
const num2 = 5
for (let i = 1; i < num2; i++) {
    for (let j = 0; j < i; j++) {
        process.stdout.write(`*`)
    }
    console.log(`\n`)
}

//3
const num3_1 = 7
const num3_2 = 3
const num3_3 = 15
const num3_4 = 2
const num3_5 = 9
let max = num3_1
if (num3_2 > max) {
    max = num3_2
}
if (num3_3 > max) {
    max = num3_3
}
if (num3_4 > max) {
    max = num3_4
}
if (num3_5 > max) {
    max = num3_5
}
console.log(`Maximum number: ${max}`)

//4
const num4 = 51233
console.log(`Number of digits in ${num4}: ${num4.toString().length}`)

//5
const start = 1
const end = 8
for (let i = start; i <= end; i++) {
    console.log(i)
}

//6
let num6 = 1234
let num6Reversed = 0
while (num6 > 0) {
    num6Reversed = num6Reversed * 10 + num6 % 10
    num6 = Math.floor(num6 / 10)
}
console.log(`Reversed number: ${num6Reversed}`)

//7
const num7 = 5
for (let i = 1; i <= num7; i++) {
    for (let j = 0; j < i; j++) {
        process.stdout.write(i.toString())
    }
    console.log(`\n`)
}

//8
const num8 = 516
const numPolindrome = 0
for (let i = 0; i < num8.toString().length / 2; i++) {
    if (num8.toString()[i] !== num8.toString()[num8.toString().length - 1 - i]) {
        console.log(`${num8} is not a palindrome`)
        break
    }
    if (i === Math.floor(num8.toString().length / 2) - 1) {
        console.log(`${num8} is a palindrome`)
    }
}

//9
const num9 = 5
for (let i = 1; i <= 10; i++) {
    console.log(`${num9} x ${i} = ${num9 * i}`)
}

//10
let num10 = 12
while (num10 > 1) {
    if (num10 % 2 == 0) {
        num10 /= 2
        console.log(`Current number: ${num10}`)
    }
    else {
        num10 *= 3
        num10 += 1
        console.log(`Current number: ${num10}`)
    }
}