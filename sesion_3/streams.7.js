const fs = require("fs");

const reader = fs.createReadStream("/Users/kmmx/video.mp4");
const writer = fs.createWriteStream("/Users/kmmx/video-copy-2.mp4");

writer.on("pipe", reader => {
    console.log("Tubería:", reader.path);
});

reader.pipe(writer);