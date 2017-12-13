# Node Master

Repositorio para la preparación a la Certificación de Node

## Pruebas Unitarias

Node provee un módulo llamado `assert` que nos permite hacer distintos tipos de pruebas unitarias, por ejemplo, determinar si dos objetos son iguales `assert.deepStrictEqual({ a: 1 }, { a: "1" })`, dicha prueba puede pasar (no hacer nada) o puede fallar (devolver un error) en caso de que no pase la prueba.

~~~js
const assert = require("assert");
const mi_modulo = require("./mi_modulo");

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

## Callbacks

Un callback es una función enviada como parámetro de otra, que continua el flujo de la función principal, y esta es llamada, cuando la función principal lo determina. Por ejemplo, una función tiene el objetivo de realizar una busqueda en la base de datos, cuando los resultados están listos, esta debe entregarsélos a la función callback.

~~~js
const db = require("./db");

db.find("gatos", result => {
    console.log(result);
});

db.find("perros", function (result) {
    console.log(result);
});

db.find("pájaros", function callback(result) {
    console.log(result);
});
~~~

Es importante observar del código anterior, que las 3 consultas, se realizarán de forma asíncrona, es decir casi al mismo tiempo.

## Eventos

Los eventos nos permiten ejecutar funciones cuando el controlador de eventos genera dichos eventos. El controlador de eventos puede emitir todos los eventos que quiera y cada que emita un evento, este será escuchado por los `listeners` registrados para escuchar dicho evento. Un ejemplo simple consiste en un evento simple que dispara el evento `par`, cada que lee un número par y dispara el evento `impar` cuando lee un número impar. Ambos eventos son emitidos, enviando cualquier cantidad de parámetros, para que los `listeners` registrados puedan acceder a dichos parámetros y hacer cualquier cosa con ellos.

~~~js
// Cargamos la clase padre de la que derivan todos los controladores de eventos
const EventEmitter = require("events");

// Creamos una clase derivada controladora de eventos
// La clase hija posee el método this.emit(evt, ...args)
// encargada de emitir un evento llamado como evt y todos los
// argumentos necesarios.
// También cuenta con el método this.on(evt, callback) que se encarga
// de registrar un callback que será llamado cada que se emita el
// evento evt
class Task extends EventEmitter {

    // Definimos una función llamada start() que al invocarla
    // emite los eventos par e impar
    start() {
        for (let i = 1; i <= 100; i++) {
            if (i % 2 === 0) {
                // emite el evento par con un argumento que es el valor de número par
                this.emit("par", i); 
            } else {
                // emite el evento par con un argumento que es el valor de número impar
                this.emit("impar", i);
            }
        }
    }

}

// Creamos una instancia del controlador de eventos
const task = new Task();

// Registramos un callback para el evento par
task.on("par", n => {
    console.log("Número par:", n);
});

// Registramos un callback para el evento impar
task.on("impar", n => {
    console.log("Número impar:", n);
});

// Ejecutamos nuestro método que emite los eventos
task.start();
~~~