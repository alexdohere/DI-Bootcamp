// In the js file, create an array called allBooks. This is an array of objects.
// Each object is a book that has 4 keys (ie. 4 properties):
// title,
// author,
// image: a URL,
// alreadyRead: which is a boolean (true or false).

let allBooks = [
  {
    title: "Great Expectations",
    author: "Charles Dickens",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Great_Expectations_%28Illustrated_Edition%29.jpg",
    alreadyRead: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image:
      "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    alreadyRead: false,
  },
];

// Requirements: All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book:
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read, set the color of the book’s details to red.

let mySec = document.querySelector(".listBooks");
let newDiv = document.createElement("div");
newDiv.classList.add("books");
mySec.appendChild(newDiv);

function addProperties(thisBook) {
  let curBook = document.createElement("div");
  curBook.style.display = "flex";
  curBook.style.flexDirection = "column";
  curBook.style.alignItems = "center";
  curBook.style.margin = "20px";

  let caption = document.createElement("p");
  caption.textContent = `${thisBook.title} written by ${thisBook.author}`;
  if (thisBook.alreadyRead) {
    caption.style.color = "red";
  }

  curBook.appendChild(caption);

  let img = document.createElement("img");
  img.src = thisBook.image;
  img.style.width = "100px";

  curBook.appendChild(img);
  newDiv.appendChild(curBook);
}

allBooks.forEach(addProperties);
