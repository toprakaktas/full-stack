/**
 * Arrow functions with scope
 */

// Define a default value for the window (entire DOM)
window.value = 5;

const something = {
    name: "Something",
    value: 19,
    newValue: function (value) {
        console.log("The value is:", this.value); // 19
        this.value = value;
        console.log("The new value is:", this.value); // 29
        // Immediately invoked function
        (function () {
            console.log("The value in nested function:", this.value); // 5
        }());
        // Arrow function
        (() => {
            console.log("The value in nested function:", this.value); // 19
        }); 
    }
};

console.log(something.newValue(29));