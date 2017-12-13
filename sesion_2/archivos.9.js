// Checar si un archivo está siendo modificado en tiempo real
const fs = require("fs");

fs.readFile("sesion_2/fake.txt", (err, buff) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(buff.toString("utf-8"));
});