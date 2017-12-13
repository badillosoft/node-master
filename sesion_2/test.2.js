function prom(arr) {
    let s = 0;
    for (let x of arr) {
        s += x;
    }
    return s / arr.length;
}

module.exports = prom;