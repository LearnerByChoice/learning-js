function addTwoNumbers(number1, number2){ // these are parameters
    console.log(number1 + number2);    
}
addTwoNumbers(); /* Output - NaN (because we did not give any arguments) */
addTwoNumbers(2, 5); //these are arguments /* Output - 7 */
addTwoNumbers(3, "4"); /* Output - 34 */
addTwoNumbers(3, "a"); /* Output - 3a */
addTwoNumbers(3, null); /* Output - 3 */

// IMPORTANT POINT:
const result = addTwoNumbers(3, 5);
console.log(result); /* Output - undefined : this is not the return value, this is just console output*/

// a better way to understand the above
function addTwoNumbers(number1, number2){ // these are parameters
    let result
    result =  number1 + number2;    
    return result;
}
const result1 = addTwoNumbers(10, 5);
console.log(result1) /* Output - 15 */ 

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return       
    }
    return `${username} just logged in`
}

loginUserMessage("Hitesh") // no output
console.log(loginUserMessage("Hitesh")); /* Output - Hitesh just logged in */

// Suppose you do not pass any value, then
console.log(loginUserMessage()); /* Output - undefined just logged in */

function loginUserMessageNegative(username){
    if(!username){
        console.log("Please enter a username");
        return       
    }
    return `${username} just logged in`
}

// Suppose you do not pass any value, then
console.log(loginUserMessageNegative()); /* Output - Please enter a username */

// When you define a default value in parameters, it takes the one you pass, if you dont pass the default 
// is taken