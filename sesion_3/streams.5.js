const fs = require("fs");

const reader = fs.createReadStream("/Users/kmmx/video.mp4");
const writer = fs.createWriteStream("/Users/kmmx/video-copy.mp4");

reader.on("data", chunk => {
    writer.write(chunk);
});

reader.on("end", () => {
    writer.end();
});