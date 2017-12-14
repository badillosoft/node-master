const a = 0x75; // key
const b = 0xF3; // message

const c = a ^ b; // encoded message
const d = c ^ a; // b
const e = c ^ b; // a

console.log(c.toString(16));
console.log(d.toString(16));
console.log(e.toString(16));