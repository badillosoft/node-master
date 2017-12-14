const fs = require("fs");

fs.readFile("sesion_2_repaso/producto.json", { encoding: "utf-8" }, (err, content) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Contenido del archivo:");
    console.log(content);
    console.log(typeof content);
    const producto = JSON.parse(content);
    console.log(producto.existencias * 2);
});