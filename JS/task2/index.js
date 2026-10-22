
const func1 = () => {
    let a = "some string";
    let b = "other string";
    a = a + b;
    b = a.slice(0, a.length - b.length);
    a = a.slice(b.length);
    console.log(a, b);
}

const func2 = () => {
    const mat = [
        ['f', 'o', 'o', 'R', 'b'],
        ['b', 'a', 'r', 'B', 'x'],
        ['r', 'o', 'X', 'O', 'r'],
        ['R', 'B', 'O', 'r', 'X'],
        ['x', 'y', 'z', 'a', 'b']
    ]
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] == 'X') {
                count++;
                console.log(`Found 'X' at position (${i - 1}, ${j - 1})`);
            }
        }
    }
    console.log(`Total count of 'X': ${count}`);
}

const func3 = () => {
    let family = { parents: {}, children: [{ name: "Ali" }, { name: "Lea" }, { name: "Mona" }] };
    console.log(family.children[2].name);
    console.log(`${family.children[2].name}, ${family.children[1].name}, ${family.children[0].name}`);
}

const func4 = () => {
    let arr = [1, 2, 3, 4, 5];
    let temp = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        temp.push(arr[i]);
    }
    console.log(temp);
}

const func5 = () => {
    let num = 0;
    let str = 0;
    let obj = 0;
    let nulle = 0;
    let bool = 0;
    const arr = [1, 'a', { a: 1 }, true, null];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null) {
            nulle++;
        }
        else if (typeof arr[i] === 'object') {
            obj++;
        }
        else if (typeof arr[i] === 'string') {
            str++;
        }
        else if (typeof arr[i] === 'number') {
            num++;
        }
        else if (typeof arr[i] === 'boolean') {
            bool++;
        }
    }
    console.log(`Number of numbers: ${num}`);
    console.log(`Number of strings: ${str}`);
    console.log(`Number of objects: ${obj}`);
    console.log(`Number of booleans: ${bool}`);
    console.log(`Number of null values: ${nulle}`);
}

const func6 = () => {
    const arr = [110, 95, 100, 105, 90];
    const temp = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 100) {
            temp.push(arr[i]);
            count++;
        }
    }
    console.log(temp);
    console.log(`Number of comparisons is: ${count}`);
}

const func7 = () => {
    let count = 0;
    const obj = { even: [], odd: [] };
    for (let i = 0; i <= 50; i++) {
        if (i % 2 === 0) {
            obj.even.push(i);
        } else {
            obj.odd.push(i);
        }
        if (i / 2 == 0 && i / 3 == 0) {
            count++;
        }
    }
    console.log(obj);
    console.log(count);

}

const func8 = () => {
    const arr = [
        [1, 2, 3, 7, 8],
        [4, 5, 6, 5, 6],
        [7, 8, 9, 2, 3],
        [10, 11, 12, 1, 2],
        [13, 14, 15, 0, 1]
    ];
    for (let i = 0; i < arr.length;) {
        for (let j = 0; i < arr.length && j < arr[i].length; j++, i++) {
            arr[i][j] = '#';
            arr[i][arr[i].length - 1 - j] = '#';
        }
    }
    console.log(arr);
}

const func9 = () => {
    const str = "Hello World!";
    const letters = {};
    for (let i = 0; i < str.length; i++) {
        let letter = str[i].toLowerCase();
        if (letter >= 'a' && letter <= 'z') {
            if (letters[letter]) {
                letters[letter]++;
            } else {
                letters[letter] = 1;
            }
        }
    }

    console.log(letters);
}

const func10 = () => {
    const mat = [
        [1, 2, 3],
        [4, 5, -6],
    ]
    const arr = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] >= 0)
                arr.push(mat[i][j]);
        }
    }
    console.log(arr);
}

const func11 = () => {

}

func10();