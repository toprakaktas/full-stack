class Computer {
    constructor(
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
            type: storageType,
            usedSpace: storageUsedSpace,
            freeSpace: storageFreeSpace,
        };
    }
    useStorage(useSpace) {
        this.storage.usedSpace += useSpace;
        if (this.storage.usedSpace > this.storage.capacity) {
            console.log("You don't have enough space.");
            this.storage.usedSpace = this.storage.capacity;
        }
        this.storage.freeSpace = (this.storage.capacity - this.storage.usedSpace);
    }
    changeBrand(brandName) {
        this.brand = brandName;
    }
    updateMotherboard(newMB) {
        this.motherboard = newMB;
    }
    changeOS(newOS) {
        this.operatingSystem = newOS;
    }
    updateProcessor(newProcessor) {
        this.processor = newProcessor;
    }
    changeInternalGPU(internalGPU) {
        this.graphics.internal = internalGPU;
    }
    changeIntegratedGPU(integratedGPU) {
        this.graphics.integrated.name = integratedGPU;
    }
    updateIntegratedGPUModel(newModelGPU) {
        this.graphics.integrated.model = newModelGPU;
    }
    updateIntegratedGPUMemory(newMemory) {
        this.graphics.integrated.memory = newMemory;
    }
    updateRAM(newRAM) {
        this.ram = newRAM;
    }
}

export default Computer;