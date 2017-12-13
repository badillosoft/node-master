const assert = require("assert");

function prom(arr) {
    let s = 0;
    for (let x of arr) {
        s += x;
    }
    return s / arr.length;
}

assert.equal(prom([1, 2, 3, 4]), 2.5);
assert.equal(prom([5, 8, 9, 10]), 2.51);