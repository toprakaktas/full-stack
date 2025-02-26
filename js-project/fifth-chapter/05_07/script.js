/**
 * Challenge: Array Manipulation
 * 1- Remove the last item from the array
 * 2- Sort the remaining array items alphabetically
 * 3- Move the last item in the array to the first position
 * 4- Find the "USB Drive" item in the array and move to the last position
 * 5- Find the "laptop" item in the array and remove it
 * 
 * Expected Output:
 * [
 *    "phone",
 *    "camera",
 *    "headphones",
 *    "light bulb",
 *    "notebook",
 *    "pen",
 *    "USB drive"
 * ]
 */

const deskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "laptop",
    "light bulb",
    "USB drive",
    "elephant"
];

const processArray = deskArray => {
    const newDeskArr = [...deskArray];
    // Your code goes here
    // 1
    newDeskArr.pop();
    console.log(newDeskArr);
    
    // 2
    newDeskArr.sort();
    console.log(newDeskArr);

    // 3
    newDeskArr.unshift(newDeskArr.pop());
    console.log(newDeskArr);

    // 4
    newDeskArr.splice(newDeskArr.indexOf("USB drive"), 1);
    newDeskArr.push("USB drive");
    console.log(newDeskArr);

    // 5
    newDeskArr.find(function (item){
        if (item == "laptop") {
            newDeskArr.splice(newDeskArr.indexOf(item), 1);
        }
    });
    console.log(newDeskArr);
    
    // Your code ends here

    return newDeskArr;
};

const result = processArray(deskArray);