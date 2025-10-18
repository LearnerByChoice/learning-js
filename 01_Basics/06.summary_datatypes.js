/* Datatypes are of two types:
1. Primitive datatypes (call by value)
2. Non-primitive datatypes (call by reference)

Datatypes are classified into how datatypes are stored and called from memory
Primitive - String, Number, Boolean, null, undefined, Symbol, BigInt
These are copied and changes are made in the copy.

Reference (non-primitive) - Arrays, Objects, Functions

Javascipt is dynamically typed language
*/
const score = 100
const scoreValue = 100.314

const isLoggedIn = true
const temperature = null

let userEmail; //undefined

const id = Symbol('123') // return type is also symbol
const anotherId = Symbol('123')
console.log(id===anotherId); /* Output - false */

const bigNumber = 345769835682359007569369n;
console.log(typeof bigNumber); /* Output - bigint */

const heroes = ['Captain America', 'Hulk', 'Black Panther']
const student = {
    name: 'Test User',
    age: 22,
}
const func_var = function(){
    console.log('Hello World!');
    
}
console.log(typeof heroes); /* Output - object */
console.log(typeof student); /* Output - object */
console.log(typeof func_var); /* Output - function */

