console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // comparison check convert null to a number (null becomes 0). 
// Equality check does not convert hence it is false

console.log(undefined > 0); // Any comparison with undefined always results in false
console.log(undefined == 0);
console.log(undefined >= 0);

/* Output -
false
false
true
false
false
false
*/