// Checar si un archivo está siendo modificado en tiempo real
const fs = require("fs");

fs.watch("sesion_2/fake.txt", { encoding: "utf-8" }, (evt, filename) => {
    console.log(evt, filename);
});