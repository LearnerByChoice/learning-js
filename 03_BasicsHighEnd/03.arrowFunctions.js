// this keyword contains current context (context matlab about what are you talking)

const user = {
    userName: 'Hitesh',
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to website`);   
        console.log(this); /*Output: Hitesh, welcome to website
{
  userName: 'Hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
Test User, welcome to website
{
  userName: 'Test User',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}*/
             
    }
}

// arrow function does not have this

user.welcomeMessage /* Output: blank, because it is a function and was called without braces */
user.welcomeMessage() /* Output: Hitesh, welcome to website */

user.userName = "Test User"
user.welcomeMessage() /* Output: Test User, welcome to website. current context when this keyword is used */
console.log(this); /* Output: {} -> empty context because in node env, in console, it will be window context */

// ******************************** ARROW FUNCTION ********************************

function chai(){
    console.log(this);
    
}
chai() /* Output: <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
} */

function chaiTry(){
    const username = 'Test'
    console.log(this.username);
    
}
chaiTry() /* Output: undefined, inside a function you cannot use this keyword */

const chaiVariable = function(){
    const username = 'Test'
    console.log(this.username);
}
chaiVariable() /* Output: undefined, even when you assign a function to a variable */

const chaiArrow = () => {
    const username = 'Test'
    console.log(this.username); /* Output: undefined */
    console.log(this); /* Output: {} */
    
}
chaiArrow();

() => {}; // basic arrow function
const addSeven = () => {} // can hold arrow function in a variable

const addEgiht = (num1, num2) => {
    return num1 + num2
}
console.log(addEgiht(3, 4)); /* Output: 7 */

const addNine = (num1, num2) => num1 + num2 // implicit return, it understands that only one line code

const addTen = (num1, num2) => (num1 + num2) // if you wrap in curly then you have to use return keyword, if in (), then no retrun keyword

const addEleven = (num1, num2) => ({user: 'Test'}) // wrap in brackets to return object, otherwise directly usinng curly braces will gice undefined.
