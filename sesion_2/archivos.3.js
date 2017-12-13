const fs = require("fs");

fs.access("sesion_2/fake.txt", fs.constants.W_OK, err => {
    if (err) {
        console.log("No hay permisos de escritura");
        fs.chmod("sesion_2/fake.txt", 0o777, err => {
            if (err) {
                console.log("No se puede cambiar el permiso de escritura");
                return;
            }
            console.log("Ahora se puede escribir el archivo");
        });
        return;
    }
    console.log("El archivo puede escribirse");
});