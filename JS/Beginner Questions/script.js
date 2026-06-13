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