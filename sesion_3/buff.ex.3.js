const fs = require("fs");

const a = 0x75; // key

fs.readFile("sesion_3/fake.txt", (err, buff) => {
    if (err) {
        console.log(err);
        return;
    }

    const enc_buff = buff.map(b => b ^ 0x75);

    fs.writeFile("sesion_3/fake_b64.txt", enc_buff.toString("base64"), err => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Archivo guardado");
    });
});
