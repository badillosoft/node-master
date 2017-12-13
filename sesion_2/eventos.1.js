// CALLBACKS

function downloadFile(url, callback) {
    setTimeout(() => {
        callback("Hola soy el archivo");
    }, 5000);
}

downloadFile("http://fakeurl.com/archivo.png", (archivo) => {
    console.log("Descarga finalizada:", archivo);
});