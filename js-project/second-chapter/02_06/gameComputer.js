/**
 * Extended Class Practice
 */
import Computer from './computer.js';

class GameComputer extends Computer {
    constructor(
        brand,
        motherboard,
        operatingSystem,
        processor,
        graphicsIntegratedName,
        graphicsIntegratedModel,
        graphicsIntegratedMemory,
        ram,
        storageCapacity,
        storageType,
        turboMode
    ) {
        // Initialize the parent class properties
        super(brand, motherboard, operatingSystem, processor, graphicsIntegratedName, graphicsIntegratedModel, graphicsIntegratedMemory, ram, storageCapacity, storageType);
        this.turboMode = turboMode;
    }

    updateIntegratedGPUMemory(newMemory) {
        super.updateIntegratedGPUMemory(newMemory);
        if (this.graphics.integrated.memory < newMemory) {
        this.graphics.integrated.memory = newMemory;
        } else {
            console.log("The new memory is too low.");
        }
    }
    updateRAM(newRAM) {
        super.updateRAM(newRAM);
        if (this.ram < newRAM) {
            this.ram = newRAM;
        } else {
            console.log("The new RAM is too low.");
        }
    }
    updateMode(mode) {
        if (this.turboMode == false) {
            this.turboMode = true;
        } else {
            console.log("The Game Computer is on Turbo Mode.");
        }
    }
}

export default GameComputer;