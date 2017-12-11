# Node Master

Repositorio para la preparación a la Certificación de Node

## Pruebas Unitarias

Node provee un módulo llamado `assert` que nos permite hacer distintos tipos de pruebas unitarias, por ejemplo, determinar si dos objetos son iguales `assert.deepStrictEqual({ a: 1 }, { a: "1" })`, dicha prueba puede pasar (no hacer nada) o puede fallar (devolver un error) en caso de que no pase la prueba.

~~~js
const assert = require("assert");
const mi_modulo = require("./mi_modulo);

const result = mi_modulo.conectar("user", "password");

assert.deepStrictEqual(result, { connected: true });
~~~

Muchas veces hacer pruebas unitarias con `assert` es un poco difícil por lo que podemos utilizar `mocha` para mostrar pruebas unitarias más estilizadas.

> Instalar mocha de forma global: `$ npm install -g mocha`

> Crear una carpeta llama `/test` y colocar todas las pruebas unitarias ahí

> Ejemplo de `/test/mi_test.js`

~~~js
const assert = require("assert");

describe("Nombre de la prueba o conjunto de pruebas", () => {
    it("Pasa si 1 == '1'", () => {
        assert.equal(1, "1");
    });

    it("Pasa si 1 === '1'", () => {
        assert.strictEqual(1, "1");
    })
});
~~~

> Ejecutamos las pruebas unitarias mediante: `$ mocha`