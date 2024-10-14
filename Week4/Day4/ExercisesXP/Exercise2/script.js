// Retrieve the form and console.log it.

let form = document.querySelector("form");
console.log(form);

// Retrieve the inputs by their id and console.log them.

let firstNameInput = document.getElementById("fname");
let lastNameInput = document.getElementById("lname");
console.log(firstNameInput, lastNameInput);

// Retrieve the inputs by their name attribute and console.log them.

let fnameByName = document.getElementsByName("firstname")[0];
let lnameByName = document.getElementsByName("lastname")[0];
console.log(fnameByName, lnameByName);

// When the user submits the form (ie. submit event listener)
// - use event.preventDefault(), why ?
// - get the values of the input tags,
// - make sure that they are not empty,
// - create an li per input value,
// - then append them to the <ul class="usersAnswer"></ul>, below the form.

form.addEventListener("submit", addUserToList);
let usersAnswerList = document.getElementsByClassName("usersAnswer")[0];

function addUserToList(e) {
  e.preventDefault();

  let firstNameValue = firstNameInput.value;
  let lastNameValue = lastNameInput.value;

  if (firstNameValue === "" || lastNameValue === "") {
    alert("Please input both first name and last name.");
    return;
  }

  let firstNameLi = document.createElement("li");
  firstNameLi.textContent = firstNameValue;
  let lastNameLi = document.createElement("li");
  lastNameLi.textContent = lastNameValue;

  usersAnswerList.appendChild(firstNameLi);
  usersAnswerList.appendChild(lastNameLi);

  firstNameInput.value = "";
  lastNameInput.value = "";
}
