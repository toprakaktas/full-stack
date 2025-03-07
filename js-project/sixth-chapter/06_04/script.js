/**
 * Practice
 * 1- Create a basic function declaration.
 * 2- Make a change to an element in the DOM
 * 3- Call the function declaration
 * 4- Create a basic function expression
 * 
 * Additional Practice
 * 5- Find an element
 * 6- Make a change to it
 * 7- Call the function
 * 8- Confirm that it works
 * 9- Repeat with an arrow function
 */

// 1 & 2
function changeText() {
    document.getElementById("text").innerHTML = "Hello World!"; 
}

// 3
changeText();

// 4
const changeText2 = function() {
    document.getElementById("text2").innerHTML = "Testing expression.";
}
changeText2();

// 5 & 6 & 9
const changeText3 = () => {
    document.getElementById("text3").innerHTML = "Testing arrow function.";
}

// 7 & 8
changeText3();