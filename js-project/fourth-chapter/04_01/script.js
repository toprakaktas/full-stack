/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
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
    "/assets/computer.svg"
);

const main = document.querySelector(".maincontent");

const content = `
    <article class="computer" id="game">
    <figure class="computer_image">
        <img src=${gamePC.image} alt="computer" />
    </figure>
            <h2 class="computer_brand">${gamePC.brand} ${gamePC.motherboard}</h2>
            <ul class="computer_system">
                <li class="computer_os">Operating System:<span>  ${gamePC.operatingSystem}</span></li>
                <li class="computer_processor">Processor:<span>  ${gamePC.processor}</span></li>
                <li class="computer_gpu_internal">Graphics Internal:<span> ${gamePC.graphics.internal}</span></li>
                <li class="computer_gpu_integrated">Graphics Integrated:<span>  ${gamePC.graphics.integrated.name} ${gamePC.graphics.integrated.model} ${gamePC.graphics.integrated.memory} MB</span></li>
                <li class="computer_ram">RAM:<span>  ${gamePC.ram} GB</span></li>
                <li class="computer_storage_capacity">Storage:<span>  ${gamePC.storage.capacity} GB</span></li>
                <li class="computer_storage_type">Storage Type:<span>  ${gamePC.storage.type}</span></li>
                <li class="computer_storage_usedSpace">Used Space:<span>  ${gamePC.storage.usedSpace} GB</span></li>
                <li class="computer_storage_freeSpace">Free Space:<span>  ${gamePC.storage.freeSpace} GB</span></li>
            </ul>
    </article>
`;

main.innerHTML = content; // JS injects content into HTML

gamePC.updateIntegratedGPUMemory(16000);
console.log("The gamePC object:", gamePC);
console.log(gamePC.updateRAM(16));
