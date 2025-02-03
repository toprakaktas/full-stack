/**
 * Add DOM Elements
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

const content = `
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
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("computer")
newArticle.setAttribute("id", "game")
newArticle.innerHTML = content;

main.append(newArticle);
