/**
 * Set: Arrays with Unique Items
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

const computerItems = new Set();
computerItems.add("keyboard");
computerItems.add("mouse");
computerItems.add("monitor");
computerItems.add("case");
computerItems.add("headset");
computerItems.add("speaker");

console.log(computerItems);

if (!computerItems.has("speaker")) {
    computerItems.add("speaker");
} else {
    console.log("Speaker already exists.");
}

const computer1 = {
    items: ["keyboard", "mouse", "monitor", "case", "headset"],
}; 

const computer2 = {
    items: ["laptop", "mouse", "speaker"]
};

const newComputerItems = new Set();

newComputerItems.forEach((item) => {
    if (computer1.items.includes(item) ){
        console.log(`${item} exists in computer 1.`);
    } else if (computer2.items.includes(item)) {
        console.log(`${item} exists in computer 2.`);
    } else {
        console.log(`${item} does not exist in either computer.`);
    }
});