"use strict"; // treat all JS code as newer version

// alert("Hello World!") // does not work as we are using node

//String
let name = "test user"

// number
let age = 10

// boolean
let isLoggedIn = true

// null: both standalone value and datatype, typeof(null) = object
let state=null

//undefined: only declared variable, typeof(undefined) = undefined
let temperature

// symbol: for uniqueness

//object

console.table([name, age, isLoggedIn, state, temperature])
console.table([typeof(name), typeof(age), typeof(isLoggedIn), typeof(state), typeof(temperature)])

// Output -
/*
─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'test user' │
│ 1       │ 10          │
│ 2       │ true        │
│ 3       │ null        │
│ 4       │ undefined   │
└─────────┴─────────────┘
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'string'    │
│ 1       │ 'number'    │
│ 2       │ 'boolean'   │
│ 3       │ 'object'    │
│ 4       │ 'undefined' │
└─────────┴─────────────┘
*/



