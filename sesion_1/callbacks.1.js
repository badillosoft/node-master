// Callbacks

function esperar_1s(callback) {
    setTimeout(() => {
        console.log("Ha pasado 1 segundo");
        callback();
    }, 1000);
}

esperar_1s(() => {
    console.log("Realmente ha pasado 1 segundo");
}); // Se ejecuta de forma asíncrona

// Se ejecuta inmediatamente
// console.log("Ha pasado 1 s");