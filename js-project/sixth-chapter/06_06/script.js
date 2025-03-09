/**
 * Practice: 
 *    - Create two functions that are dependent on the other to output some data from a custom object
 * 
 *      + Main Function:
 *          - Create a new article element
 *          - Populate with content from the object properties
 *          - Return the new element
 * 
 *      + Second Function:
 *          - Create a new figure element
 *          - Populate with an image pointing to the image URL define in the object
 *          - Add <figcaption> with the image description
 *          - Return the whole figure
 * 
 * Continued Practice:
 *    - Use querySelector and append method
 *    - Pass the object to the main function
 *    - Pass it to the figure function
 *    - Return everything to the main function
 */

class Something {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    mainFunction() {
        const article = document.createElement("article");
        article.innerHTML = `
            <h2>${this.name}</h2>
            <a href=${this.value}>Image link</a>
        `;
        article.appendChild(this.secondFunction());
        return article;
    }

    secondFunction() {
        const figure = document.createElement("figure");
        figure.innerHTML = `
            <img src="${this.value}" alt="${this.name}" />
            <figcaption>${this.name}</figcaption>
        `;
        return figure;
    }
}

const main = document.querySelector("main"); 

if (main) {
    const newThing = new Something("Something", "https://picsum.photos/200/300");
    main.appendChild(newThing.mainFunction()); 
} else {
    console.error("main element not found.");
}
