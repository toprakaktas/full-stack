/**
 * Assignment vs Comparison
 */

// Assigning values
let a = 5;
let b = 4;

console.log(`let a: ${a} (${typeof a})`);
console.log(`let a: ${b} (${typeof b})`);

// Comparisons

if (a == b) {
    console.log("Match!");
} else {
    console.error("No match!");
}

if (a === b) {
    console.log("Match!");
} else {
    console.error("No match!");
}

if (a >= b) { 
    // or a <= b
    console.log("Match!");
} else {
    console.error("No match!");
}

if (a != b) {
    console.log("Match!");
} else {
    console.error("No match!");
}

if (a !== b) {
    console.log("Match!");
} else {
    console.log("No match!");
}