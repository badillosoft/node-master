const http = require("http");
const express = require("express");

const app = express();

app.get("/hola", (req, res) => {
    res.send("Hola mundo");
});

http.createServer(app).listen(3000, () => {
    console.log("Servidor iniciado http://localhost:3000");
});