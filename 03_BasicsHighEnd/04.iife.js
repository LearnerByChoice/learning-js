// Immediately Invoked function expression (IIFE)

/* Need of IIFE:
1. to execute the function immediately after creation
2. for database connections
3. to not poluute the function with global scope variables */

function chai(){
    console.log("Database connected");    
}
chai(); /* Output: Database connected */

// to invoke immediately, we can skip chai() call

// function chai(){
//     console.log("Database connected with iife"); 
// }() // errors out

(function chai_iife(){ // named IIFE
    console.log("Database connected with iife"); 
})(); /* Output - Database connected with iife */

// () () --> first is function declaration, second is definition

// arrow function of iife
(() => {
    console.log("Database connection iife arrow");
})(); /* Output - Database connection iife arrow */ 

// NOTE: Make sure to end the first function with ;, otherwise it will error out
// ; --> this ends the context, iife does not know when to end the function

((name) => {
    console.log(`Database connection iife arrow by ${name}`);
})('TestUser'); /* Output - Database connection iife arrow by TestUser */ 