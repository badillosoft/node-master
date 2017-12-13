const fs = require("fs");

fs.access("sesion_2/fake.txt", fs.constants.W_OK, err => {
    if (err) {
        console.log("No hay permisos de escritura");
        return;
    }
    console.log("El archivo puede escribirse");
});