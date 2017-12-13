const assert = require("assert");
const prom = require("../sesion_2/test.2");

describe("Pruebas sobre la función `prom`:", () => {
    it("El promedio de [1, 2, 3] => 2", () => {
        assert.equal(prom([1, 2, 3]), 2.1);
    });
});