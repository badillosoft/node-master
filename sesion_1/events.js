const EventEmitter = require("events");

class Task extends EventEmitter {

    start() {
        for (let i = 1; i <= 100; i++) {
            if (i % 2 === 0) {
                this.emit("par", i);
            }
        }
    }

}

const task = new Task();

task.on("par", n => {
    console.log("Número par:", n);
});

task.start();