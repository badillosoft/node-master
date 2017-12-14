const a = 0x0001; // 0000 0000 0000 0001 
const b = 0x0003; // 0000 0000 0000 0011
const c = 0x00FA; // 0000 0000 1111 1010
const d = 0xFE79; // 1111 1110 0111 1001

const sd = d >> 1; // 0111 1111 0011 1100 -> 0x7F3C
const usd = d << 1; // 0001 1111 1100 1111 0010 -> 0x1FCF2

console.log(sd.toString(16));
console.log(usd.toString(16));