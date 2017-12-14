const buff = Buffer.from("'\"Hola mundo, soy yo :D ò ó ö ñ 😁 \"'");

console.log(buff);
console.log(buff.toString("base64"));
console.log(buff.toString("hex"));