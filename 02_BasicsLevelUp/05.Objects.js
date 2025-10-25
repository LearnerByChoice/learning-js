// // Objects declaring two ways
// // 1. Singleton only created when we create as constructor (Object.create)
// // 2. using literals

// const JsUser = {
//     name: "Test",
//     age: 24,
//     email: "test@exmaple.com",
//     isLoggedIn: true,
//     companies_worked_in: ['Google', 'Facebook', 'Infotech']
// }
// // by default the name key is considered as string. We dont need to define it as string

// // accessing objects
// console.log(JsUser.age);
// console.log(JsUser['email']); // better to use because if the key has spaces in it, . convention cannot be used

// // Object with symbol

// const mySym = Symbol("key1")

// const newUser = {
//     name: "Test",
//     [mySym]: "mykey1",
//     age: 24,
//     email: "test@exmaple.com",
//     isLoggedIn: true,
//     companies_worked_in: ['Google', 'Facebook', 'Infotech']
// }

// console.log(typeof newUser["mySym"]); /* Output - string */
// console.log(newUser.mySym); /* Output - mykey1 */
// // when using it as a string
// console.log(newUser[mySym]); /* Output - mykey1 */

// // updating values of an object
// newUser.email = 'new@email.com'
// console.log(newUser); /* Ouptut - {
//   name: 'Test',
//   age: 24,
//   email: 'new@email.com',
//   isLoggedIn: true,
//   companies_worked_in: [ 'Google', 'Facebook', 'Infotech' ],
//   [Symbol(key1)]: 'mykey1'
// }
// */

// // freezing an object - no changes will be propogated
// Object.freeze(newUser)
// newUser.email = 'new@emailafterfreeze.com'
// console.log(newUser); /* Output - notice email remains same {
//   name: 'Test',
//   age: 24,
//   email: 'test@exmaple.com',
//   isLoggedIn: true,
//   companies_worked_in: [ 'Google', 'Facebook', 'Infotech' ],
//   [Symbol(key1)]: 'mykey1'
// }
// */ 

// // functions
// newUser.greeting = function(){
//     console.log("Hello new user");    
// }

// console.log(newUser.greeting); /* Output - [Function (anonymous)] */
// console.log(newUser.greeting()); /* Output - Hello new user */

// // referencing the same object - use this
// newUser.greetingTwo = function(){
//     console.log(`Hello new user ${this.name}`);    
// }
// console.log(newUser.greetingTwo()); /* Output - Hello new user Test */

/****************************** Objects - Part II *******************************/
// const tinderUser = new Object() // singleton object
// console.log(tinderUser); /* Output - {} */

// tinderUser.id = "abc123"
// tinderUser.name = "Sam"
// tinderUser.isLoggedIn = false

// // object inside an object

// const regularUser = {
//     email: 'abc@example.com',
//     fullName: {
//         userFullName: {
//             firstName: "TestFirst",
//             lastName: "TestLast"
//         }
//     }
// }
// console.log(regularUser.fullName.userFullName.firstName); /* Output - TestFirst */

// // optional chaining
// console.log(regularUser.fullName?.userFullName.firstName); /* Output - TestFirst; the question mark 
// after the fullName denotes optional meaning if the fullName key does not exist, check the next key */

// // combining objects
// const obj1 = {1: 'a', 2: 'b'}
// const obj2 = {3: 'a', 4: 'b'}

// const obj3 = {obj1 , obj2}
// console.log(obj3); /* Output - { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } */

// const obj4 = Object.assign({}, obj1, obj2) // empty object to signify that it is target and make sure target is an object
// // target is {} and source is obj1, obj2 and if there are more
// console.log(obj4); /* Output -  {'1': 'a', '2': 'b', '3': 'a', '4': 'b' } */

// const obj5 = {...obj1, ...obj2} // spread method
// console.log(obj5); /* Output -  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } */

// console.log(Object.keys(obj1)); /* Output - [ '1', '2' ] */
// console.log(Object.values(obj1)); /* Output - [ 'a', 'b' ] */
// console.log(Object.entries(obj1)); /* Output - [ [ '1', 'a' ], [ '2', 'b' ] ] */

// // check if keys exist then fetch the value
// console.log(obj1.hasOwnProperty("1"));  /* Output - true */
// console.log(obj1.hasOwnProperty("8"));  /* Output - false */

/****************************** Objects - Part III *******************************/

// Destructuring of objects
const course = {
    courseName: 'JS Hindi',
    price: 999,
    courseInstructor: 'sir'
}

const {courseInstructor} = course; // instead of writing it again and again, we assign the object to a const
console.log(courseInstructor); /*  Output - sir */

const {courseInstructor: instructor} = course
console.log(instructor); /*  Output - sir */

// API - apna kaam kisi aur k sar par daalna
// {
//     "courseName": 'JS Hindi',
//     "price": 999,
//     "courseInstructor": 'sir'
// }
// In json, both keys and values are in " "

