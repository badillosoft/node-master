const fs = require("fs");

fs.stat("sesion_2/fake.txt", (err, stat) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Status:", stat);
});