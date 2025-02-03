/**
 * Challenge:
 * 1- Add the list items into an unordered list
 * 2- Add the unordered list into a <nav> container
 * 3- Give the <nav> container the class "main-navigation"
 * 4- Append the new <nav> container to the existing element with the class "siteheader"
 */


// Setup data
const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;


function createNavMenu(document) {
    // Your code goes here
    const nav = document.createElement("nav");
    nav.classList.add("main-navigation");
    const navList = document.createElement("ul");
    navList.innerHTML = navContent;
    nav.append(navList);
    document.querySelector(".siteheader").append(nav);
}

