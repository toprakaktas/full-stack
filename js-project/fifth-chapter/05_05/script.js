/**
 * Array Methods
 */

let computerContents = ["monitor", "keyboard", "case", "mouse"];

// Outputs array as string with separator "|"
console.log(computerContents.join(" | "));

// ['monitor', 'keyboard', 'case', 'mouse', 'speaker']
computerContents.push("speaker");

/* Inserts "headset" at the start of an array
* ['headset', 'monitor', 'keyboard', 'case', 'mouse', 'speaker']
*/
computerContents.unshift("headset"); 

/* Removes the first element from an array and returns it
* ['monitor']
*/
computerContents.shift();

/* Removes the last element from an array and returns it
* ['speaker']
*/
computerContents.pop();

computerContents.forEach(function (item) {
    item = `<li>${item}</li>`;
    console.log(item);
});

// Returns the first item that passes the test
let longItems = computerContents.find(function (item) {
    if (item.length >= 8) {
        return item;
    }
});
console.log("longItems:", longItems);

console.log(computerContents);