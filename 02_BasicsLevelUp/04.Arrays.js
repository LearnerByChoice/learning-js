// // array - collection of multiple items in a single variable

// const myArr = ['Test1', 'Test2', 'Test3', 5, true, 79.5, 'TestUser5']
// console.log(myArr); /* Output - [ 'Test1', 'Test2', 'Test3', 5, true, 79.5, 'TestUser5' ] */

// // array indexing starts from 0

// // array copy operation performs shallow copy
// // shallow copy of an object is a copy whose properties share the same reference (points to the same underlying values)
// // that means if you change the copy you change the actual object as well

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2); /* Output - [ 1, 2, 3, 4 ] */

// // REMEMBER: Arrays have a prototype and an inner prototype as well

// // Array methods:
// myArr.push('TestUser6')
// console.log(myArr); /* Output - [ 'Test1', 'Test2', 'Test3', 5, true, 79.5, 'TestUser5', 'TestUser6'] */

// myArr.pop() //does not take any argument
// myArr.pop() 
// console.log(myArr); /* Output after two pops - [ 'Test1', 'Test2', 'Test3', 5, true, 79.5 ] */

// myArr.unshift('myunshiftvariable')
// console.log(myArr); /* Output - [ 'myunshiftvariable', 'Test1', 'Test2', 'Test3', 5, true, 79.5 ] */
// // unshift is not good, because it is memory extensive operation, as it shifts all variables

// myArr.shift() // mostly similar as pop() method, takes out first variable
// myArr.shift()
// console.log(myArr); /* Output - [ 'Test2', 'Test3', 5, true, 79.5 ] */

// console.log(myArr.includes(79.5)); /* Output - true (boolean value) */
// console.log(myArr.indexOf(9)); /* Output - -1 (because it does not exist) */
// console.log(myArr.indexOf('Test3')); /* Output - 1 */

// // how to convert array to string
// const newArr = myArr.join()
// console.log(myArr); /* Output - [ 'Test2', 'Test3', 5, true, 79.5 ] */
// console.log(typeof myArr); /* Output - object */
// console.log(newArr); /* Output - Test2,Test3,5,true,79.5 */
// console.log(typeof newArr); /* Output - string */

// // slice and splice - IMPORTANT for interview
// console.log("This is my original array: ", myArr); /* Output - [ 'Test1', 'Test2', 'Test3', 5, true, 79.5, 'TestUser5' ] */
// const slicedArray = myArr.slice(1, 3) // slice returns a section of an array
// console.log("This is my sliced array: ", slicedArray); /* Output - [ 'Test2', 'Test3' ] */
// console.log("This is my original array after slice operation: ", myArr); /* Output - [ 'Test1', 'Test2', 'Test3', 5, true, 79.5, 'TestUser5' ] */
// console.log(`***************************************`)
// const splicedArray = myArr.splice(1, 3) // splice includes the end index and manipulates the original array
// console.log("This is my spliced array: ", splicedArray); /* Output - [ 'Test2', 'Test3', 5 ] */
// console.log("This is my original array after splice operation: ", myArr); /* Output - [ 'Test1', true, 79.5, 'TestUser5' ] */


// ******************************************************
const array_1 = ['TestUser1', 'TestUser2', 'TestUser3', 'TestUser4']
const array_2 = [10, 20, 30, 40, 50]
array_1.push(array_2);
console.log(array_1); /* Output - [
  'TestUser1',
  'TestUser2',
  'TestUser3',
  'TestUser4',
  [ 10, 20, 30, 40, 50 ]
], this is a kind of extend operation in Python*/

// to perform append operation
newArr = array_1.concat(array_2)
console.log(array_1); /* concat returns a new array, push uses the same array */
console.log(newArr); /* Output - ['TestUser1', 'TestUser2', 'TestUser3', 'TestUser4', 10, 20, 30, 40, 50 ] */

const spreadArr = [...array_1, ...array_2]
console.log(spreadArr); /* Output - [
  'TestUser1', 'TestUser2',
  'TestUser3', 'TestUser4',
  10,          20,
  30,          40,
  50
] */ 

const nested_array = [1, 2, 3, [4, 5, 6, 7], 8, 9, [10, 11,], [19]]
const flat_array = nested_array.flat(Infinity) // will resolve all to independent elements, but expensive operation
console.log(flat_array); /* Output - [
   1,  2, 3, 4,  5,
   6,  7, 8, 9, 10,
  11, 19
] */

console.log(Array.isArray("Test")); /* Output - false */
console.log(Array.from('Test')); // create an array from the given string /* Output - [ 'T', 'e', 's', 't' ] */
console.log(Array.from({name: 'Test'})); // need to explicitly mention create array from keys or values /* Output - [] */
// if it does not understand the argument, it will return empty array

let score_1 = 100 
let score_2 = 200
let score_3 = 300
console.log(Array.of(score_1, score_2, score_3)); // returns a new array from set of elements /* Output - [ 100, 200, 300 ] */



