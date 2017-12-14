const fs = require("fs");

const a = 0x75; // key

fs.readFile("sesion_3/fake.txt", (err, buff) => {
    if (err) {
        console.log(err);
        return;
    }

    fs.writeFile("sesion_3/fake_b64.txt", buff.toString("base64"), err => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Archivo guardado");
    });
});
