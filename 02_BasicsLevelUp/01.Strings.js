const empName = "TestUser"
const age = 34

console.log(`Employee ${empName} has age: ${age}`); // string interpolation

const gameName = String('AnotherTestUser')
console.log(gameName); /* Output - AnotherTestUser */
console.log(gameName.__proto__); /* Output - {} */

// String methods
console.log(gameName.length); /* Output - 15 */
console.log(gameName.toUpperCase()); /* Output - ANOTHERTESTUSER */
console.log(gameName.charAt(6)); /* Output - r */
console.log(gameName.indexOf('E')); /* Output - -1 because E is not found*/
console.log(gameName.indexOf('e')); /* Output - 5 takes the first occurence */

console.log(gameName.split('')); /* Output - [
  'A', 'n', 'o', 't',
  'h', 'e', 'r', 'T',
  'e', 's', 't', 'U',
  's', 'e', 'r'
] */
console.log(gameName.substring(0, 4)); /* Output - Anot */
console.log(gameName.slice(-4, -1)); /* Output - Use */

const testTrimString = "          testString           "
console.log(testTrimString); /* Output -          testString             */
console.log(testTrimString.trim()); /* Output - testString */

const replaceString = "ReplaceTest"
console.log(replaceString.replace('Test', 'matter')); /* Output - Replacematter */

console.log(replaceString.includes('Test')); /* Output - true */
console.log(replaceString.split('T')); /* Output - [ 'Replace', 'est' ] */

