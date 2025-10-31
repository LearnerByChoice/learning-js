// ******************************** WHILE LOOP ********************************
let i = 1;
while (i < 10) {
    console.log(`Value of i: ${i}`);
    i = i+2    
}
/* Output: Value of i: 1
Value of i: 3
Value of i: 5
Value of i: 7
Value of i: 9 */

myArray = ['User1', 'User2', 'User3', 'User4']
let j = 0;
while(j < myArray.length){
    console.log(`Users are: ${myArray[j]}`);
    j++
}
/* Output: Users are: User1
Users are: User2
Users are: User3
Users are: User4 */

// ******************************** DO-WHILE LOOP ********************************
let score = 1;
do {
    console.log(`Score is: ${score}`);
    score++;    
} while (score < 5); // if initially value of score is greater than condition, then also it will run atleast once.
