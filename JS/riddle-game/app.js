import all from './riddles/index.js'
import readline from 'readline-sync'
import Player from './classes/Player.js'
import Riddle from './classes/Riddle.js';
import MultipleChoiceRiddle from './classes/MultipleChoiceRiddle.js'
import fs from 'fs';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const allRiddles = all.map(
    r => new Riddle(
        r.id,
        r.name,
        r.taskDescription,
        r.correctAnswer,
        r.difficulty,
        r.timeLimit,
        r.clue
    )
);
const m = new MultipleChoiceRiddle(1, "k", "k", 2, ["a", "b", "c"])
console.log(m.ask());

console.log('Welcome to the riddle game!');
const playerName = readline.question('what your name ? ');
const arrPlayer = JSON.parse(fs.readFileSync('./players/players.txt', 'utf8'));
const currentPlayer = arrPlayer.find(p => p.name === playerName);
if (currentPlayer) {
    console.log(`Hi ${playerName}! Your previous lowest time was ${currentPlayer.lowestTime} seconds.`);
} else {
    const id = readline.question('Enter your id: ');
    const name = readline.question('Enter your name: ');
    const newPlayer = { id, name, lowestTime: null };
    arrPlayer.push(newPlayer);
    fs.writeFileSync('./players/players.txt', JSON.stringify(arrPlayer), 'utf8');
}
const player = new Player(playerName)
const todo = readline.question(`What do you want to do? 
            1. Play the game
            2. Create a new riddle
            3. Read all riddles
            4. Update an existing riddle
            5. Delete a riddle
            6. View leaderboard
`)
if (todo === "1") {
    const level = readline.question('Choose difficulty: easy / medium / hard: ');
    shuffle(allRiddles)
    const levelRiddles = allRiddles.filter(x => x.difficulty === level)
    console.log(levelRiddles);

    levelRiddles.forEach(r => {
        const startTime = Date.now();
        const addTime = r.ask()
        const endTime = Date.now();
        player.recordTime(startTime, endTime, addTime);
    })
    player.showStats();
} else if (todo === "2") {
    const name = readline.question('Enter riddle name: ');
    const description = readline.question('Enter description: ');
    const answer = readline.question('Enter correct answer: ');
    const newRiddles = new Riddle(allRiddles.length + 1, name, description, answer)
    const data = fs.readFileSync('./riddles/db.txt', 'utf8');
    const riddlesArray = JSON.parse(data);
    riddlesArray.push(newRiddles);
    fs.writeFileSync('./riddles/db.txt', JSON.stringify(riddlesArray), 'utf8');
    console.log("the riddle");
} else if (todo === "3") {
    const data = fs.readFileSync('./riddles/db.txt', 'utf8');
    console.log(JSON.parse(data));
} else if (todo === "4") {
    const fileContent = fs.readFileSync('./riddles/db.txt', 'utf8');
    const riddlesArray = JSON.parse(fileContent);
    if (riddlesArray.length === 0) {
        console.log("No riddles found in the database.");
    }
    const id = parseInt(readline.question('Enter riddle id: '), 10);
    const riddleIndex = riddlesArray.findIndex(r => r.id === id);
    if (riddleIndex === -1) {
        console.log("not found");
    }
    const current = riddlesArray[riddleIndex];
    console.log(`\nupdate riddle: "${current.name}"`);
    const name = readline.question(`Enter riddle name [${current.name}]: `) || current.name;
    const description = readline.question(`Enter description [${current.taskDescription}]: `) || current.taskDescription;
    const answer = readline.question(`Enter correct answer [${current.correctAnswer}]: `) || current.correctAnswer;
    riddlesArray[riddleIndex] = new Riddle(id, name, description, answer);
    fs.writeFileSync('./riddles/db.txt', JSON.stringify(riddlesArray, null, 2), 'utf8');
    console.log("the riddle updated successfully!");
    console.log(riddlesArray[riddleIndex]);
} else if (todo === "5") {
    const fileContent = fs.readFileSync('./riddles/db.txt', 'utf8');
    let riddlesArray = JSON.parse(fileContent);
    if (riddlesArray.length === 0) {
        console.log("No riddles available to delete.");
    }
    const idToDelete = parseInt(readline.question('\nEnter the ID of the riddle you want to delete: '), 10);
    const riddleIndex = riddlesArray.findIndex(r => r.id === idToDelete);
    if (riddleIndex === -1) {
        console.log("Riddle with this ID was not found.");
    }
    riddlesArray = riddlesArray.filter(r => r.id !== idToDelete);
    fs.writeFileSync('./riddles/db.txt', JSON.stringify(riddlesArray, null, 2), 'utf8');
    console.log("Riddle deleted successfully!");
}