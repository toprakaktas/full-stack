const miniPC = {
    brand: "Xiaomi",
    ram: 4,
    processor: "AMD Ryzen 5 5600G",
    graphics: "GTX 1650 Super"
};

const buyPC = function (currentPC) {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
        <h2>${currentPC.brand}</h2>
        <ul>
            <li>RAM:${currentPC.ram} GB</li>
            <li>Processor:${currentPC.processor}</li>
            <li>Graphics:${currentPC.graphics}</li>
        </ul>
    `;
    return newArticle;
};

const theArticle = buyPC(miniPC);
console.log(theArticle);
const main = document.querySelector("main");
main.append(buyPC(miniPC));