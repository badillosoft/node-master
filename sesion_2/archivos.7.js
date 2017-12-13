const fs = require("fs");

fs.stat("sesion_2/fake.txt", (err, stat) => {
    if (err) {
        console.log(err);
        return;
    }

    const current = new Date();
    const creation = new Date(stat.ctime);

    const diff = current - creation;

    const ms = Math.floor(diff % 1000);
    const s = Math.floor(diff / 1000 % 60);
    const m = Math.floor(diff / (60 * 1000) % 60);
    const h = Math.floor(diff / (60 * 60 * 1000) % 24);
    const d = Math.floor(diff / (24 * 60 * 60 * 1000));

    console.log(`El archivo fue creado hace ${d} dias ${h} horas ${m} min ${s} seg`);
});