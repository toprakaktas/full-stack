/**
 * Functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Function declaration
function doSomeMath(a, b) {
    let c = a + b;
    return c;
}

// Function expression
const doMoreMath = function (a, b) {
    let c = a + b;
    return c;
}

console.log(doSomeMath(2, 3));
console.log(doMoreMath(2, 3));

// Immediately invoked function expression (IIFE)
(function () {
    let a = 2;
    let b = 3;
    let c = doSomeMath(a, b);
    console.log(`The sum of a and b is: ${c}`);
})(2, 3);