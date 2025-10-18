/*
Primitive - Stack 

Reference - Heap

*/
let myName = 'TestUser'
let anotherName = myName
console.log(`myName is: ${myName}`); /* Ouput - myName is: TestUser */
console.log(`anotherName is: ${anotherName}`); /* Ouput - anotherName is: TestUser */

anotherName = 'newTestUser'
console.log(`myName is: ${myName}`); /* Ouput - myName is: TestUser */
console.log(`anotherName is: ${anotherName}`); /* Ouput - anotherName is: newTestUser */

let empData = {
    email: 'test@example.com',
    age: 34
}
let empData1 = empData;
empData1.email = 'changedemail@example.com'
console.log(empData); /* Ouput - { email: 'changedemail@example.com', age: 34 } */
console.log(empData1); /* Ouput - { email: 'changedemail@example.com', age: 34 } */



