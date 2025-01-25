/**
 * Create a class for the gamePc object type.
 */
import Computer from "./computer.js";

const gamePC = new Computer(
    "Monster",
    "Abra A5 V19.4",
    "Microsoft Windows 11 Home",
    "12th Gen Intel Core i5-12500H",
    "Intel Iris Xe Graphics",
    "NVIDIA",
    "GeForce RTX 3050",
    4096,
    32,
    953.03,
    573.19,
    379.84,
    "SSD"
);

console.log("The gamePC object:", gamePC);
console.log("The storage capacity value:", gamePC.storage.capacity);