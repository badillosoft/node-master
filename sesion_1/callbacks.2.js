function generarPersonas() {
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

    return personas;
}

console.log(generarPersonas());