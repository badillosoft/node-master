// Checar si un archivo está siendo modificado en tiempo real
const fs = require("fs");

fs.readFile("sesion_2/fake.txt", (err, buff) => {
    if (err) {
        console.log(err);
        return;
    }

    const lines = buff.toString("utf-8").split("\n");

    console.log(lines);
});