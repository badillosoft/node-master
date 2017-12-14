const fs = require("fs");

const writter = fs.createWriteStream("sesion_3/datos_stream.txt");

writter.setDefaultEncoding("utf-8");

writter.write("Hola mundo\n");
writter.write("Hola mundo\n");
writter.write("Hola mundo\n");
writter.write("Hola mundo\n");

writter.end();