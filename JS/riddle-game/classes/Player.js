export default class Player {
    constructor(name) {
        this.name = name;
        this.time = [];
    }

    recordTime(start, end, addTime) {
        const duration = (end - start) / 1000 + addTime;
        this.time.push(duration);
    };

    showStats() {
        const total = this.time.reduce((sum, time) => sum + time, 0);
        const average = this.time.length > 0 ? total / this.time.length : 0;
        console.log("Player:", this.name);
        console.log("Total time:", total);
        console.log("Average time:", average);
    }
};
