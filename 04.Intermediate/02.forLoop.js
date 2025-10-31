for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}
/* Output: 0
1
2
3
4
5
6
7
8
9 */

// nested loop
for (let index = 0; index < 10; index++) {
    console.log(`Outer Loop iterator variable: ${index}`);
    for (inner_variable = 0; inner_variable < 10; inner_variable++){
        console.log(`Outer Loop iterator variable: ${index} and inner loop variable: ${inner_variable}`);
    }      
}
// /* Output: Outer Loop iterator variable: 9
// Outer Loop iterator variable: 9 and inner loop variable: 0
// Outer Loop iterator variable: 9 and inner loop variable: 1
// Outer Loop iterator variable: 9 and inner loop variable: 2
// Outer Loop iterator variable: 9 and inner loop variable: 3
// Outer Loop iterator variable: 9 and inner loop variable: 4
// Outer Loop iterator variable: 9 and inner loop variable: 5
// Outer Loop iterator variable: 9 and inner loop variable: 6
// Outer Loop iterator variable: 9 and inner loop variable: 7
// Outer Loop iterator variable: 9 and inner loop variable: 8
// Outer Loop iterator variable: 9 and inner loop variable: 9 */

// NOTE: Cntl + D finds all the duplicates

// There is no out-of-bound exception in javascript, it gives "undefined"

// ****************************** BREAK and CONTINUE ******************************
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Value of index is: ${index}`); 
        console.log("Detected 5");
        break; // to break any flow
    } 
    console.log(`Value of index is: ${index}`);    
}

for (let index = 1; index <= 20; index++) {    
    if(index === 5){        
        console.log("Detected 5");
        continue; // one time skip
    }
    console.log(`Value of index is: ${index}`);    
}