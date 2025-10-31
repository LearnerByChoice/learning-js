// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a); /* Output - 10 */
// console.log(b); /* Output - 20 */
// console.log(c); /* Output - 30 */

var c = 300; // it is over-written by the value 30

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a); /* Output - ReferenceError: a is not defined */
// console.log(b); /* Output - ReferenceError: b is not defined */
console.log(c); /* Output - 30 */ // THIS IS A PROBLEM


// Hence the concept of block scope and global scope.

// **************************** HOISTING ****************************
function one(){
    const username = 'Test'
    function two(){
        const website = 'youtube'
        console.log(username);
               
    }
    // console.log(website);
    two(); // child - can ask for all parent variables
       
}
one(); // parent - cannot ask child for any variables

/* Output: First run - ReferenceError: website is not defined
After commenting website log statement
Second run - Test
*/

// **************************** EXAMPLE (HOISTING) ****************************
function addOne(num) {
    return num + 1
}
addOne(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)

// If addOne is called before defining the function, it still works, but because 
// addTwo is being held in a variable, if we execute it before declaring/defining
// it will throw an error