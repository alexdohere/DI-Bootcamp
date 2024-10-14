// Using Javascript, in the <div>, change the value of the id attribute from navBar to
// socialNetworkNavigation, using the setAttribute method.

let navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

// First, create a new <li> tag (use the createElement method).

let newLi = document.createElement("li");

// Create a new text node with “Logout” as its specified text.

let newTextNode = document.createTextNode("Logout");

// Append the text node to the newly created list node (<li>).

newLi.appendChild(newTextNode);

// Finally, append this updated list node to the unordered list (<ul>),
// using the appendChild method.

let list = navBar.querySelector("ul");
list.appendChild(newLi);

// Use the firstElementChild and the lastElementChild properties to
// retrieve the first and last <li> elements from their parent element (<ul>).

let firstLi = list.firstElementChild;
let lastLi = list.lastElementChild;

// Display the text of each link. (Hint: use the textContent property).

console.log("First List Item:", firstLi.textContent);
console.log("Last List Item:", lastLi.textContent);
