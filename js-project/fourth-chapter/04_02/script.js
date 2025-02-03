/**
 * Practice: 
 * 1- Find an element and add two different classes.
 * 2- Remove only one of the new classes
 * 3- Add a new attribute to an element
 * 
 * Additional Practice:
 * 4- Request the value of the attribute
 * 5- Change the value of the attribute
 * 6- Add some inline CSS to an element by specifying the style property and setting its value
 * 7- Query the style property of an element in the console to get a list of all the style properties available
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

// 1
document.querySelector("figure").className
document.querySelector("figure").classList.add("first")
document.querySelector("figure").classList.add("second")

// 2
document.querySelector("figure").classList.remove("first")

// 3
document.querySelector("figure").setAttribute("test", "new")

// 4 
document.querySelector("figure").getAttribute("test")

// 5
document.querySelector("figure").setAttribute("test", "newTest")

// 6
document.querySelector("figure").style.backgroundColor = "mediumpurple"

// 7 
console.log(document.querySelector("figure").style)
