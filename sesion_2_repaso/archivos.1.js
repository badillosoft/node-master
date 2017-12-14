 const fs = require("fs");

 fs.writeFile("sesion_2_repaso/producto.json", JSON.stringify({
     nombre: "Coca",
     descripcion: "Refresco",
     costo: 12.5,
     existencias: 1000,
     agotado: false
 }, null, 2), err => {
     if (err) {
         console.log(err);
         return;
     }
     console.log("Se ha guardo el producto");
 });