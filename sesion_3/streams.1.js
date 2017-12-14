const fs = require("fs");

const writter = fs.createWriteStream("sesion_3/datos_stream.1.txt");

writter.setDefaultEncoding("utf-8"); // Guarda: JyJIb2xhIG11bmRvLCBzb3kgeW8gOkQgw7Igw7Mgw7Ygw7Eg8J+YgSAiJw==
writter.setDefaultEncoding("base64"); // Guarda: '"Hola mundo, soy yo :D ò ó ö ñ 😁 "'

const buff = Buffer.from("JyJIb2xhIG11bmRvLCBzb3kgeW8gOkQgw7Igw7Mgw7Ygw7Eg8J+YgSAiJw==", "base64");

writter.write(buff.toString("base64"));

writter.end();