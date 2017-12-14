const fs = require("fs");

const keys = [0x21, 0x75, 0xF4, 0x99, 0xDA];

fs.readFile("sesion_3/fake_b64_enc.txt", (err, buff) => {
    if (err) {
        console.log(err);
        return;
    }

    const b64 = Buffer.from(buff.toString("utf-8"), "base64");

    const dec_buff = b64.map((b, i) => b ^ keys[i % keys.length]);

    console.log(dec_buff.toString("utf-8"));
});
