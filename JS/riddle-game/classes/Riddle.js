import readline from 'readline-sync'

export default class Riddle {
    constructor(id, name, taskDescription, correctAnswer) {
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }

    ask() {
        let answer;
        while (answer !== this.correctAnswer) {
            console.log(this.taskDescription);
            answer = readline.question();
        }
    }
}
