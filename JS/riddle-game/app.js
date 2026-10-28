import all from './riddles/index.js'
import readline from 'readline-sync'
import Player from './classes/Player.js'
import Riddle from './classes/Riddle.js';
import MultipleChoiceRiddle from './classes/MultipleChoiceRiddle.js'

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
const m = new MultipleChoiceRiddle(1,"k","k",2,["a","b","c"])
console.log(m.ask());

console.log('Welcome to the riddle game!');
const playerName = readline.question('what your name ? ');
const player = new Player(playerName)
const level = readline.question('Choose difficulty: easy / medium / hard: ');
shuffle(allRiddles)
const levelRiddles = allRiddles.filter(x=>x.difficulty===level)
console.log(levelRiddles);

levelRiddles.forEach(r => {
    const startTime = Date.now();    
    const addTime=r.ask()
    const endTime = Date.now();
    player.recordTime(startTime, endTime, addTime);
})

player.showStats();