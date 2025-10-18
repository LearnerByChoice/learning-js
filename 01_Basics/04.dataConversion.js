// let score_str = "33"

// // string to number conversion
// // 1. String to Number
// console.log(typeof(score_str));  /* Output - string */
// let valueInNumber = Number(score_str)
// console.log(typeof(valueInNumber)); /* Output - number */

// // 2. Incorrect string - no error in conversion, but returns NaN
// let incorrect_str = '33abc'
// console.log(typeof(incorrect_str));  /* Output - string */
// let newValueInNumber = Number(incorrect_str)
// console.log(typeof(newValueInNumber)); /* Output - number */
// console.log(newValueInNumber); /* Output - NaN */ // always check on NaN value, conversion does not fail

// // 3. Null - no error in conversion, but returns 0
// let new_score1 = null
// console.log(typeof(new_score1));  /* Output - object */
// let newValueInNumber1 = Number(new_score1)
// console.log(typeof(newValueInNumber1)); /* Output - number */
// console.log(newValueInNumber1); /* Output - 0 */

// // 4. undefined - no error in conversion, but returns NaN
// let new_score2
// console.log(typeof(new_score2));  /* Output - undefined */
// let newValueInNumber2 = Number(new_score2)
// console.log(typeof(newValueInNumber2)); /* Output - number */
// console.log(newValueInNumber2); /* Output - NaN*/

// // 5. Boolean - no error in conversion, but returns 0 or 1
// let new_score3 = true
// console.log(typeof(new_score3));  /* Output - boolean */
// let newValueInNumber3 = Number(new_score3)
// console.log(typeof(newValueInNumber3)); /* Output - number */
// console.log(newValueInNumber3); /* Output - 1*/



// // number to boolean conversion (all values are true, empty is false)
// let isLoggedIn = 1
// console.log(typeof(isLoggedIn));  /* Output - number */
// let ValueInBoolean = Boolean(isLoggedIn)
// console.log(typeof(ValueInBoolean)); /* Output - boolean */
// console.log(ValueInBoolean); /* Output - true */


// **************************** Operations ****************************
let value = 3
let negValue = -value
console.log(negValue); /* Output - -3 */

console.log("1"+2); /* Output - 12 */
console.log(1+"2"); /* Output - 12 */
console.log("1"+2+2) /* Output - 122 */
console.log(1+2+"2") /* Output - 32 if string first, all will be string, string last, operation first*/

let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n