// Callbacks

function esperar_1s() {
    setTimeout(() => {
        console.log("Ha pasado 1 segundo");

    }, 1000);
}

esperar_1s(); // Se ejecuta de forma asíncrona

// Se ejecuta inmediatamente
// console.log("Ha pasado 1 s");