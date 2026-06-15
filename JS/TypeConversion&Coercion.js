// 1. Convert the string `"50"` into a number.
var a = "50"; // string
var A = Number(a)
console.log(typeof A) // number

// 2. Convert the number `100` into a string.
var num = 100; // number
var str = String(num);
console.log(typeof str)

// 3. Convert `"true"` into a boolean.
var a = "true" // string
var b = Boolean(a);
console.log(typeof b)

// 4. Check the output of:
// - `"5" + 2`
// - `"5" - 2`
// - `true + 1`
console.log("5" + 2) // 52
console.log("5" - 2) // 3
console.log(true + 1) // 2

// 5. Create a variable with value `"123abc"` and convert it into a number.
var x = "123abc";
var z = Number(x);
console.log(z) // NaN

// 6. Use `parseInt()` on `"500px"`.
var a = "500px";
var b = parseInt(a); // 500
console.log(b)
