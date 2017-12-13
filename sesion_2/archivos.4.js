// Copiar un archivo
const fs = require("fs");

fs.copyFile("sesion_2/fake.txt", "sesion_2/fake-copy.txt", err => {
    if (err) {
        console.log("No se puede copiar el archivo");
        return;
    }

    console.log("Archivo copiado");
});