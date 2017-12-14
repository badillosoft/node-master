const fs = require("fs");

const keys = [0x21, 0x75, 0xF4, 0x99, 0xDA]; // 256 ^ 5 => 1,099,511,627,776

fs.readFile("sesion_3/fake.txt", (err, buff) => {
    if (err) {
        console.log(err);
        return;
    }

    const enc_buff = buff.map((b, i) => b ^ keys[i % keys.length]);

    fs.writeFile("sesion_3/fake_b64_enc.txt", enc_buff.toString("base64"), err => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Archivo guardado");
    });
});
