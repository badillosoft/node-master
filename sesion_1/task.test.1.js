const assert = require("assert");

assert.doesNotThrow(() => {
    throw new Error("He fallado");
});