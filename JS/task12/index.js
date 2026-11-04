// 1. Read File with Promise
function readFilePromise(path) {
    const fs = require("fs");
    return new Promise((res, rej) => {
        fs.readFile(path, "utf8", (err, data) => {
            if (err) {
                rej(err);
            } else {
                res(data);
            }
        })
    })
}

readFilePromise('./test.txt').then(data => {
    console.log(data);
}).catch(err => {
    console.error("Error reading file:", err);
});

//2. Async Read File
async function readFileAsync(path) {
    const fs = require("fs");
    return fs.promises.readFile(path, "utf8")
}

readFileAsync('./test.txt').then(data => {
    console.log(data);
}).catch(err => {
    console.error("Error reading file:", err);
});

//3. Get File Size
async function getFileSize(path) {
    const fs = require("fs");
    return fs.promises.stat(path)
}

getFileSize('./test.txt').then(data => {
    console.log(data.size);
})

//4. List Files in Directory
import fs from "fs";
import path from "path";
async function listFiles(dir) {
    return fs.promises.readdir(dir)
}

//5. Read Multiple Files in Order
async function readFilesInOrder(files) {
    files.sort()
    return files;
}

listFiles('./').then(dir => readFilesInOrder(dir).then(a => console.log(a)))

//6. Read Files in Parallel
async function readFilesParallel(files) {
    const readFilePromises = files.map(file =>
        fs.promises.readFile(file, "utf8")
    );
    const contents = await Promise.all(readFilePromises);

    contents.forEach(content => {
        console.log(content);
    });
}

readFilesParallel(['test.txt', 'b.txt'])

//7. Check If File Exists with Promise
function fileExists(path) {
    return new Promise((res, rej) => {
        fs.access(path, (err) => {
            if (err)
                res(false)
            else
                res(true)
        })
    })
}

fileExists('./test.txt').then(f => console.log(f));

//8. Copy File with Promises
async function copyFile(src, dest) {
    const copy = fs.promises.readFile(src, 'utf-8')
    fs.promises.writeFile(dest, await copy)
}

copyFile('test.txt', 'bl.txt');

// 9. Merge Text Files
async function mergeFiles(files, output) {
    const readPromises = files.map(file =>
        fs.promises.readFile(file, "utf8")
    );
    const contents = await Promise.all(readPromises);
    const mergedContent = contents.join('\n');
    fs.promises.writeFile(output, mergedContent)
}

mergeFiles(['b.txt', 'bl.txt'], 'merged.txt');

//10. Search Word in All Files
async function searchWordInFiles(dir, word) {
    const files = await fs.promises.readdir(dir);
    await Promise.all(
        files.map(async (file) => {
            const filePath = path.join(dir, file);
            const content = await fs.promises.readFile(filePath, "utf8");
            if (content.includes(word)) {
                console.log(file);
            }
        })
    )
}

searchWordInFiles('../task12', 'yael');