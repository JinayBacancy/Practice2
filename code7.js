let a = 71,
    b = 19;
console.log(`Before a = ${a}  b = ${b}`);
a = a + b;
b = a - b;
a = a - b;
console.log(`After a = ${a}  b = ${b}`);