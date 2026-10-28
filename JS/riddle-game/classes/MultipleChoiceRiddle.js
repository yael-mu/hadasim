import Riddle from "./Riddle.js";
import promptSync from 'prompt-sync'

export default class MultipleChoiceRiddle extends Riddle {
    constructor(id, name, taskDescription, correctAnswer, choices) {
        super(id, name, taskDescription, correctAnswer);
        this.choices = choices;
    }

    ask() {
        let answer;
        let answerInt;
        while (answerInt !== this.correctAnswer) {
            console.log(this.taskDescription);
            this.choices.forEach((c, index) => {
                console.log(`${index + 1}. ${c}`);
            });
            const prompt = promptSync();
            answer = prompt();
            answerInt = parseInt(answer)
        }
    }
}