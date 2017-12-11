const EventEmitter = require("events");

class Clock extends EventEmitter {

    start() {
        const start_time = new Date();
        let i_sec = 0;
        let i_min = 0;
        while(true) {
            let current_time = new Date();

            let diff_millis = current_time - start_time;
            let diff_seconds = diff_millis / 1000;
            let diff_minutes = diff_seconds / 60;

            let d_sec = Math.floor(diff_seconds);
            let d_min = Math.floor(diff_minutes);

            if (d_sec != i_sec && d_sec % 60 === 0) {
                this.emit("next-min", d_sec);
                i_sec = d_sec;
            }
            if (d_min != i_min && d_min % 60 === 0) {
                this.emit("next-hour", d_min);
                i_min = d_min;
            }
        }
    }

}

const clock = new Clock();

clock.on("next-min", seconds => {
    console.log("Ha pasado un minuto");
});

clock.on("next-hour", minutes => {
    console.log("Ha pasado una hora");
});

clock.start();