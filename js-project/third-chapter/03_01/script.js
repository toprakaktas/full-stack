/**
 * Template Literals ``
 */
import Computer from './computer.js';

const gamePC = new Computer(
    "Monster",
    "Abra A5 V19.4",
    "Microsoft Windows 11 Home",
    "12th Gen Intel Core i5-12500H",
    "Intel(R) Iris(R) Xe Graphics",
    "NVIDIA",
    "GeForce RTX 3050",
    4096,
    32,
    953.03,
    573.19,
    379.84,
    "SSD",
);

// Template Literal constant
const content = `
    <main>
    <article>
            <h2>${gamePC.brand} ${gamePC.motherboard}</h2>
            <ul>
                <li>Operating System: ${gamePC.operatingSystem}</li>
                <li>Processor: ${gamePC.processor}</li>
                <li>Graphics Internal: ${gamePC.graphics.internal}</li>
                <li>Graphics Integrated: ${gamePC.graphics.integrated.name} ${gamePC.graphics.integrated.model} ${gamePC.graphics.integrated.memory} MB</li>
                <li>RAM: ${gamePC.ram} GB</li>
                <li>Storage: ${gamePC.storage.capacity} GB</li>
                <li>Storage Type: ${gamePC.storage.type}</li>
                <li>Used Space: ${gamePC.storage.usedSpace} GB</li>
                <li>Free Space: ${gamePC.storage.freeSpace} GB</li>
            </ul>
    </article>
    </main>
`;

document.body.innerHTML = content; // JS injects content into HTML

gamePC.updateIntegratedGPUMemory(16000);
console.log("The gamePC object:", gamePC);
console.log(gamePC.updateRAM(16));
