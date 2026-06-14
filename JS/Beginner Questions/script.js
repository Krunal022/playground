//  ---------- Console & Basics ----------

// 1. Print `"Hello JavaScript"` in the console.
console.log("Hello JavaScript");

// 2. Print your name, age, and city using one `console.log()`.
console.log("My name is krunal and i'm 22 y/o. from baroda!")

// 3. Print a warning message using `console.warn()`.
console.warn("This is the first warning to you dear!")

// 4. Print an error message using `console.error()`.
console.error("Here is my last error man!")

// 5. Use `console.table()` to display an array of 5 numbers.
console.table([10, 20, 30, 40, 50])
console.table({ name: "krunal", age: 25, city: "vadodara" })

//  ---------- Variables ----------

// 2. Create a variable `age` and print it.
var age = 26
console.log("my age is " + age) // my age is 26

// 1. Create a variable called `studentName` and store your name in it.
var studentName = "Krunal W";
console.log(studentName) // Krunal W

// 3. Create two variables and swap their values.
var a = 10;
var b = 20;
console.log(a, b) // 10 20

temp = a;
a = b;
b = temp;
console.log(a, b) // 20 10

// 4. Create a constant variable for `PI` and print it.
const PI = Math.PI;
console.log(PI) //3.141592653589793

// 5. Declare a variable without assigning a value and print it.
var username;
console.log(username) // undefined

// 6. Create a variable `score` and increase it by 10.
var score = 50;
score += 10;
console.log(score) // 60

// 7. Create three variables for first name, last name, and full name.
let firstName = "Krunal";
let lastName = "Waghela";
let fullName = "Krunal Waghela!"
console.log(`my firstName is ${firstName} and last name is ${lastName} or full name is ${fullName} `)

// ---------- Data Types ----------

// 1. Create variables of type string, number, boolean, null, and undefined.
var str = "Krunal";
var num = 240413149011;
var bool = true;
var nl = null;
var undf = undefined;

// 2. Check the type of different variables using `typeof`.
console.log(typeof str, typeof num, typeof bool, typeof nl, typeof undf)

// 3. Store your mobile number in a variable and check its type.
var num = 240413149011;
console.log(typeof num) // number

// 4. Create a variable with value `null` and check its type.
var nl = null;
console.log(typeof nl) // object

// 5. Create a bigint number and print it.
var bigint = 125464215648848561321546n
console.log(typeof bigint, bigint) // bigint 125464215648848561321546n

// ---------- Type Conversion & Coercion ----------

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

// ---------- Operators ---------- 

// 1. Add two numbers and print the result.
var a = 10;
var b = 20;
console.log(a + b) // 30

// 2. Find the remainder when 25 is divided by 4.
console.log(25 / 4) // 6.25
console.log(25 % 4) // 1

// 3. Find the square of a number using exponent operator.
console.log(Math.pow(12, 2))

// 4. Increment a variable using `++`.
var a = 10
console.log(++a) // 11

// 5. Decrement a variable using `-`.
var b = 50
console.log(--b) // 49

// 6. Use `+=` operator to increase a variable by 20.
var c = 50;
c += 20;
console.log(c); // 70 

// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
var a = 70;
var b = 40;
console.log(a > b) // True
console.log(a < b) // False
console.log(a >= b) // True
console.log(a <= b) // False

// 8. Check if two values are strictly equal using `===`.
console.log(a === b) // False

// 9. Compare `"10"` and `10` using both `==` and `===`.
console.log("10" == 10) // True
console.log("10" === 10) // False

// 10. Create two boolean variables and test `&&`, `||`, and `!`.
var isStudent = true;
var hasID = false;
console.log(isStudent && hasID); // false
console.log(isStudent || hasID); // true
console.log(!isStudent);         // false
console.log(!hasID);             // true
