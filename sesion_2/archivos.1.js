const fs = require("fs");

fs.access("sesion_2/fake.txt", fs.constants.R_OK, err => {
    if (err) {
        console.log("No hay permisos de lectura");
        return;
    }
    console.log("El archivo puede leerse");
});