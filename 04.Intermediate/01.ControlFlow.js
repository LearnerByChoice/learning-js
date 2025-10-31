// ************************** IF STATEMENT **************************
/* if statement

if (condition){ // will work only if condition is true

}
*/
if (2 === "2"){
    console.log("Checking type"); // triple = checks type as well
}
else{
    console.log("Did not satify if");
    
}

// && (and): both should be true
// || (or): either condition should be true

// ************************** SWITCH-CASE STATEMENT **************************
/* switch - case statement

switch (key) { // key is what you need to check everytime
    case value:
        break;
    default:
        break;
}
*/

const month = 3; // case-senstive match
    switch (month){
        case 1:
            console.log('January');
            break;
        case 2:
            console.log('February');
            break;
        case 3:
            console.log('March');
            break;
        case 4:
            console.log('April'); // to duplicate the code, select and press, shift + alt + down arrrow
            break;
        case 5:
            console.log('May');
            break; // if no break then all code after case match will run, except default
        
        default:
            console.log("Incorrect month");
} 

// ************************** TRUTHY-FALSY VALUES **************************
// truthy and falsy values
// when we assume a truth or false value
// truthy: True, "0", 'false' (because string), " " (empty string), [], {}, function(){}, 
// falsy: False, 0, -0, 0n (BigInt), "", null, undefined, NaN

const userEmail = []
if (userEmail.length === 0){
    console.log("Array is empty"); /* Output: Array is empty */
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty"); /* Output: Object is empty */
}

console.log(false == 0); /* Output: true */
console.log(false == ''); /* Output: true */
console.log(0 == ''); /* Output: true */

// ************************** NULLISH COALESCING OPERATOR (??) **************************
let val1;
val1 = 5 ?? 10

console.log(val1); /* Output: 5 */
// when special cases like null or undefined, then used ??
val1 = null ?? 10
console.log(val1); /* Output: 10 */

val1 = undefined ?? 15
console.log(val1); /* Output: 15 */

val1 = undefined ?? null
console.log(val1); /* Output: null */

val1 = null ?? 10 ?? 20
console.log(val1); /* Output: 10, picks up the first value */


// ************************** TERNARY OPERATOR (??) **************************
// condition ? true : false
const price = 100
price >=10 ? console.log("less than 10"): console.log("More than 10"); /* Output: less than 10 */
