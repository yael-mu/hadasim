import all from './riddles/index.js'
import readline from 'readline-sync'
import Player from './classes/Player.js'
import Riddle from './classes/Riddle.js';
import MultipleChoiceRiddle from './classes/MultipleChoiceRiddle.js'
// const rawRiddles = [r1, r2, r3];
// const riddles = rawRiddles.map(
//   (r) => new Riddle(r.id, r.name, r.taskDescription, r.correctAnswer)
// );

const allRiddles = all.map(
    r => new Riddle(
        r.id,
        r.name,
        r.taskDescription,
        r.correctAnswer
    )
);
const m = new MultipleChoiceRiddle(1,"k","k",2,["a","b","c"])
console.log(m.ask());


console.log('ברוכים הבאים למשחק החידות!');
const playerName = readline.question('what your name ? ');
const player = new Player(playerName)

allRiddles.forEach(r => {
    const startTime = Date.now();
    console.log(startTime);
    
    r.ask()
    const endTime = Date.now();
    player.recordTime(startTime, endTime);
})

player.showStats();