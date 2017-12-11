function generarPersonas(callback) {
    const nombres = ["Ana", "Beto", "Carla", "Daniel"];
    const apellidos = ["Sanchéz", "Medina", "Montt"];

    const pick = arr => {
        const i = Math.floor(Math.random() * arr.length);
        return arr[i];
    };

    const personas = [];

    for (let i = 0; i < 100; i++) {
        let nombre = `${pick(nombres)} ${pick(apellidos)}`;
        personas.push(nombre);
    }

    callback(personas);
}

generarPersonas(personas_1_100 => {
    generarPersonas(personas_101_200 => {
        const personas = [...personas_1_100, ...personas_101_200]; // spread operator
        console.log(personas);
    });
});