const task = require("./task");
const assert = require("assert");

assert.ok(task);
console.log("Pasa la prueba que existe o tiene un valor verdadero task");

assert.deepEqual(task, { sum: 5050 });

console.log("Pasa la prueba de task equivalente a { sum: 5050 }");

assert.deepEqual({ a: "1" }, { a: 1 }); // "1" == 1 : ok
assert.deepStrictEqual({ a: "1" }, { a: 1 }); // "1" === 1 : fail
