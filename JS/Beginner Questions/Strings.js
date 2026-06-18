// 1. Create a string and print its length.
var str = "Krunal Waghela"
console.log(str.length) // 14

// 2. Convert a string into uppercase.
console.log(str.toUpperCase()) // WAGHELA KRUNAL

// 3. Convert a string into lowercase.
console.log(str.toLowerCase()) // krunal waghela

// 4. Check if a string includes the word `"JavaScript"`.
var word = "I love javaScript!"
console.log(word.includes("javaScript")) // True

// 5. Extract the word `"World"` from `"Hello World"`.
var a = "Hello World";
console.log(a.slice(6,)) // World

// 6. Replace `"apple"` with `"mango"` in a sentence.
var s = "I love apple."
console.log(s.replace("apple", "mango")) // I love mango.

// 7. Split `"HTML,CSS,JS"` into an array.
var str = "HTML CSS JS"
console.log(str.split(" ")) // [ 'HTML', 'CSS', 'JS' ]

// 8. Remove extra spaces from a string.
var ab = "           Krunal     "
console.log(ab.trim())

// 9. Repeat the word `"Hi"` 5 times.
var x = "Hi";
var repeatX = x.repeat(5)
console.log(repeatX)

// 10. Print the first character of a string.
var str = "Krunal is a boy."
console.log(str.slice(0,1))

// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`
var name = "Krunal"
var age = 21
console.log(`My name is ${name} and I am ${age} years old.`)