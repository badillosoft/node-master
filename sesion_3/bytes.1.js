const a = 0x0001; // 0000 0000 0000 0001 
const b = 0x0003; // 0000 0000 0000 0011
const c = 0x00FA; // 0000 0000 1111 1010
const d = 0xFE79; // 1111 1110 0111 1001

// Operador & (AND bit)
// 0 & 0 -> 0 -- 0 & 1 -> 0 -- 1 & 0 -> 0 -- 1 & 1 -> 1

// Operador | (OR bit)
// 0 & 0 -> 0 -- 0 & 1 -> 1 -- 1 & 0 -> 1 -- 1 & 1 -> 1

const op1 = c & d; // 0000 0000 0111 1000 -> 0x0078

console.log(op1.toString(16));

const op2 = c | d; // 1111 1110 1111 1011 -> 0xFEFB

console.log(op2.toString(16));
