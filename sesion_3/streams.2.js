const fs = require("fs");

const reader = fs.createReadStream("/Users/kmmx/video.mp4");

reader.on("data", chunk => {
    console.log("CHUNK:", chunk.length);
    console.log(chunk.toString("base64").slice(0, 10));
    console.log("-----------------------------");
});