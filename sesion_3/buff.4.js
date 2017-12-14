const buff1 = Buffer.from("JyJIb2xhIG11bmRvLCBzb3kgeW8gOkQgw7Igw7Mgw7Ygw7Eg8J+YgSAiJw==", "base64");
const buff2 = Buffer.from("2722486f6c61206d756e646f2c20736f7920796f203a4420c3b220c3b320c3b620c3b120f09f9881202227", "hex");

// <Buffer 27 22 48 6f 6c 61 20 6d 75 6e 64 6f 2c 20 73 6f 79 20 79 6f 20 3a 44 20 c3 b2 20 c3 b3 20 c3 b6 20 c3 b1 20 f0 9f 98 81 20 22 27>
console.log(buff1);
console.log(buff2);
console.log(buff1.toString("utf-8"));
console.log(buff2.toString("utf-8"));