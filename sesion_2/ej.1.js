// Crear un controlador de eventos que genere el evento
// `encendido` cada que se manda a llamar al método encender()
// del controlador de eventos, y emitir el evento `apagado`
// cada que se mande a llamar el método apagar()

// Agregar un listener para el evento `encendido`
// y otro listener para controlar el evento `apagado`

const EventEmitter = require("events");

class ControladorEncendido extends EventEmitter {

    encender() {
        this.emit("encendido");
    }

    apagar() {
        this.emit("apagado");
    }

}

const controlador = new ControladorEncendido();

controlador.on("encendido", () => {
    console.log("El sistema se ha encendido");
});

controlador.on("apagado", () => {
    console.log("El sistema se ha apagado");
});