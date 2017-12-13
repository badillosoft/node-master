// Checar si un archivo está siendo modificado en tiempo real
const fs = require("fs");

const personas = [{
    nombre: "Ana",
    correo: "ana@gmail.com"
}, {
    nombre: "Pepe",
    correo: "pepe@hotmail.com"
}];

fs.writeFile("sesion_2/datos.json", JSON.stringify(personas, null, 2), (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Datos guardados");
});