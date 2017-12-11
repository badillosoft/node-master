const assert = require("assert");
const task = require("../sesion_1/task");

describe("Prueba unitaria sobre task.js", () => {
    
    it("debería regresar { sum: 4950 }", () => {
        assert.deepStrictEqual(task, { sum: 4950 });
    });
    
    it("debería regresar { sum: 5050 }", () => {
        assert.deepStrictEqual(task, { sum: 5050 });
    });
});