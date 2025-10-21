// Dates

let myDate = new Date()
console.log(myDate.toString()); /* Output - Sun Oct 19 2025 18:31:51 GMT+0530 (India Standard Time) */
console.log(myDate.toDateString()); /* Output - Sun Oct 19 2025 */
console.log(myDate.toLocaleString()); /* Output - 10/19/2025, 6:31:51 PM */
console.log(typeof myDate); /* Output - object */

let myCreatedDate = new Date(2023, 0, 23) /* Output - 1/23/2023, 12:00:00 AM */
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3) /* Output - 1/23/2023, 5:03:00 AM */
let myCreatedDate2 = new Date("2023-01-14") /* Output - 1/14/2023, 5:30:00 AM */
let myCreatedDate3 = new Date("01-14-2023") /* Output - 1/14/2023, 12:00:00 AM */
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); /* Output - 1760879249809 */
console.log(myCreatedDate.getTime()); /* Output - 1674412200000 */
console.log(Math.floor(Date.now()/1000)); /* Output - 1760879249 */

let newDate = new Date()
console.log(newDate); /* Output - 2025-10-19T13:08:34.680Z */
console.log(newDate.getMonth() + 1); /* Output - 10 */
console.log(newDate.getDay()); /* Output - 0 */

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })