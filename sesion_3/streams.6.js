const fs = require("fs");

const reader = fs.createReadStream("/Users/kmmx/video.mp4");
const writer = fs.createWriteStream("/Users/kmmx/video-copy-2.mp4");

reader.pipe(writer);