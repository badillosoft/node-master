// Copiar un archivo
const fs = require("fs");

fs.copyFile("sesion_2/fake.txt", "sesion_2/fake-copy.txt", 
    fs.constants.COPYFILE_EXCL, err => {
    if (err) {
        console.log("No se puede copiar el archivo", err);
        return;
    }

    console.log("Archivo copiado");
});