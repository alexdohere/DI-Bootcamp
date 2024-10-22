// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;

  let data = {
    name: name,
    lastName: lastName,
  };

  let myString = JSON.stringify(data, null, 2);

  document.getElementById("output").textContent = myString;
});
