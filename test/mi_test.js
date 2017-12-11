const assert = require("assert");

describe("Nombre de la prueba o conjunto de pruebas", () => {
    it("Pasa si 1 == '1'", () => {
        assert.equal(1, "1");
    });

    it("Pasa si 1 === '1'", () => {
        assert.strictEqual(1, "1");
    })
});