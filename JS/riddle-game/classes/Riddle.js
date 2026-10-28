import readline from 'readline-sync'

export default class Riddle {
    constructor(id, name, taskDescription, correctAnswer, difficulty, timeLimit, clue) {
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
        this.difficulty=difficulty;
        this.timeLimit=timeLimit;
        this.clue=clue;
    }

    ask() {
        let answer;
        let timeAdd=0;
        const startTime = Date.now();    
        while (answer !== this.correctAnswer) {
            console.log(this.taskDescription);
            answer = readline.question();
            if(answer==="hint"){
                timeAdd+=10;
                console.log(this.clue);
            }
        }
        const endTime = Date.now();  
        if ((endTime-startTime)/1000>this.timeLimit) {
            console.log( "Too slow! 5 seconds penalty applied.");
            return timeAdd+5;
        } else {
            return timeAdd;
        } 
    }
}
