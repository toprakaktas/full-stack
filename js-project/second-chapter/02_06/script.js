import GameComputer from "./gameComputer.js";

const gamePC = new GameComputer(
    "Monster",
    "Abra A5 V19.4",
    "Microsoft Windows 11 Home",
    "12th Gen Intel Core i5-12500H",
    "NVIDIA",
    "GeForce RTX 3050",
    4096,
    32,
    953.03,
    "SSD",
    false
);
gamePC.updateIntegratedGPUMemory(16000);
console.log("The gamePC object:", gamePC);
console.log(gamePC.updateRAM(16));
console.log("Is gamePc on turbo mode:", gamePC.turboMode);
gamePC.updateMode(true);
console.log("Is gamePc on turbo mode:", gamePC.turboMode);