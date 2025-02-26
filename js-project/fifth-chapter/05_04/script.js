/**
 * Arrays
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

let item = "computer";

const collection = ["keyboard", item, 5, true];

collection[2] = "mouse"; // changes 5 to mouse
collection[collection.length] = "new item"; // adds at the end of the array
collection[10] = "new end"; // indexes 5 through 9 are undefined

console.log(collection);