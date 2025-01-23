/**
 * Practice Assignment
 * 1- Give each object an identifiable name.
 * 2- Create properties to describe the objects and set their values.
 * 3- Find an object that has another object inside of it to create a nested object.
 * 4- Test your object in the browser console by accessing the entire object and its specific properties.
 */
console.log("Script loaded.");
const updateComputer = (update) => {
    let main = document.querySelector("main");
    main.innerHTML = computerInfo(computer);
    console.info(update);
}

window.computer = {
    brand: "Monster",
    motherboard: "Abra A5 V19.4",
    operatingSystem: "Microsoft Windows 11 Home",
    processor: "12th Gen Intel Core i5-12500H",
    graphics: {
        internal: "Intel Iris Xe Graphics",
        integrated: {
            name: "NVIDIA",
            model: "GeForce RTX 3050",
            memory: 4096
        }
    },
    ram: 32,
    storage: {
        capacity: 953.03,
        usedSpace: 573.19,
        freeSpace: 379.84,
        type: "SSD"
    },
    useStorage: function (useSpace) {
        this.storage.usedSpace += useSpace;
        if (this.storage.usedSpace > this.storage.capacity) {
            console.log("You don't have enough space.");
            this.storage.usedSpace = this.storage.capacity;
        }
        this.storage.freeSpace = (this.storage.capacity - this.storage.usedSpace);
        updateComputer("Free space & used space changed.");
    }
};

const computerInfo = (computer) => {
    return `
        <div>
            <h2>${computer.brand} ${computer.motherboard}</h2>
            <ul>
                <li>Operating System: ${computer.operatingSystem}</li>
                <li>Processor: ${computer.processor}</li>
                <li>Graphics Internal: ${computer.graphics.internal}</li>
                <li>Graphics Integrated: ${computer.graphics.integrated.name} ${computer.graphics.integrated.model} ${computer.graphics.integrated.memory} MB</li>
                <li>RAM: ${computer.ram} GB</li>
                <li>Storage: ${computer.storage.capacity} GB</li>
                <li>Storage Type: ${computer.storage.type}</li>
                <li>Used Space: ${computer.storage.usedSpace} GB</li>
                <li>Free Space: ${computer.storage.freeSpace} GB</li>
            </ul>
        </div>
    `;
}

const main = document.createElement("main");
main.innerHTML = computerInfo(computer);
document.body.appendChild(main);

console.log("The computer:", computer);
console.log("Script loaded again.");