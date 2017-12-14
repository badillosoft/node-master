const buff = Buffer.from([1, 2, 3, 0xFF00]);

console.log(buff);
console.log(buff.toString("base64"));