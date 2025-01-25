/**
 * Create an object constructor function for the Computer object type.
 */

function Computer(
    brand,
    motherboard,
    operatingSystem,
    processor,
    graphicsInternal,
    graphicsIntegratedName,
    graphicsIntegratedModel,
    graphicsIntegratedMemory,
    ram,
    storageCapacity,
    storageUsedSpace,
    storageFreeSpace,
    storageType
) {
    this.brand = brand;
        this.motherboard = motherboard;
        this.operatingSystem = operatingSystem;
        this.processor = processor;
        this.graphics = {
            internal: graphicsInternal,
            integrated: {
                name: graphicsIntegratedName,
                model: graphicsIntegratedModel,
                memory: graphicsIntegratedMemory
            }
        };
        this.ram = ram;
        this.storage = {
            capacity: storageCapacity,
            usedSpace: storageUsedSpace,
            freeSpace: storageFreeSpace,
            type: storageType
    };
    this.useStorage = function (useSpace) {
        this.storage.usedSpace += useSpace;
        if (this.storage.usedSpace > this.storage.capacity) {
            console.log("You don't have enough space.");
            this.storage.usedSpace = this.storage.capacity;
        }
        this.storage.freeSpace = (this.storage.capacity - this.storage.usedSpace);
    };
    this.changeBrand = function (brandName) {
        this.brand = brandName;
    };
    this.updateMotherboard = function (newMB) {
        this.motherboard = newMB;
    };
    this.changeOS = function (newOS) {
        this.operatingSystem = newOS;
    };
    this.updateProcessor = function (newProcessor) {
        this.processor = newProcessor;
    };
    this.changeInternalGPU = function (internalGPU) {
        this.graphics.internal = internalGPU;
    };
    this.changeIntegratedGPU = function (integratedGPU) {
        this.graphics.integrated.name = integratedGPU;
    };
    this.updateIntegratedGPUModel = function (newModelGPU) {
        this.graphics.integrated.model = newModelGPU;
    };
    this.updateIntegratedGPUMemory = function (newMemory) {
        this.graphics.integrated.memory = newMemory;
    };
    this.updateRAM = function (newRAM) {
        this.ram = newRAM;
    };
}

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
console.log("The storage free space value:", gamePC.storage.freeSpace);