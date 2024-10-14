// Retrieve the div and console.log it

let myDiv = document.getElementById("container");
console.log(myDiv);

// Change the name “Pete” to “Richard”.

let namePete = document.getElementsByClassName("list")[0].lastElementChild;
namePete.textContent = "Richard";

// Delete the second <li> of the second <ul>.

document
  .getElementsByClassName("list")[1]
  .getElementsByTagName("li")[1]
  .remove();

// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

let lists = document.getElementsByClassName("list");
for (let i = 0; i < lists.length; i++) {
  lists[i].getElementsByTagName("li")[0].textContent = "Alex";
}

// Add a class called student_list to both of the <ul>'s.

for (let list of lists) {
  list.classList.add("student_list");
}

// Add the classes university and attendance to the first <ul>.

lists[0].classList.add("university", "attendance");

// Add a “light blue” background color and some padding to the <div>.

myDiv.style.backgroundColor = "lightblue";
myDiv.style.padding = "20px";

// Do not display the <li> that contains the text node “Dan”.

let dan = lists[1].lastElementChild;
dan.style.display = "none";

// Add a border to the <li> that contains the text node “Richard”.

let richard = lists[0].lastElementChild;
richard.style.border = "1px solid black";

// Change the font size of the whole body.

document.body.style.fontSize = "20px";
