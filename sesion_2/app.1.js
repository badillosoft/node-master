// Eventos

const EventEmitter = require("events");

class Downloader extends EventEmitter {

    downloadFile(url) {
        setTimeout(() => {
            this.emit("file-downloaded", {
                url: url,
                data: "Hola soy un archivo"
            });
        }, 5000);
    }

}

const downloader = new Downloader();

downloader.on("file-downloaded", result => {
    console.log(result);
});

downloader.on("file-downloaded", result => {
    console.log("Guardando la descarga", result.url);
});

downloader.downloadFile("http://fake.org/arch1"); // 5s
downloader.downloadFile("http://fake.org/arch2"); // 5s
downloader.downloadFile("http://fake.org/arch3"); // 5s