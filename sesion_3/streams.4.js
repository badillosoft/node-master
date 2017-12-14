const fs = require("fs");

const reader = fs.createReadStream("/Users/kmmx/video.mp4", {
    highWaterMark: 128 * 1024
});

const chunks = Buffer.alloc(4 * 128 * 1024);
let i = 0;

reader.on("data", chunk => {
    console.log("CHUNK:", chunk.length);
    console.log(chunk.toString("base64").slice(0, 10));
    console.log("-----------------------------");
    chunks.write(chunk.toString("hex"), i * 128 * 1024, 128 * 1024);
    i++;
});

reader.on("end", () => {
    console.log(`Se ha leido el video, tiene ${chunks.length} bytes`);
    console.log(chunks);
});