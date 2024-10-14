// Write a JavaScript program to calculate the volume of a sphere.

document.getElementById("MyForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let radiusInput = document.getElementById("radius").value;
  let volume = calculateVolume(Number(radiusInput));
  document.getElementById("volume").value = volume.toFixed(2);
});

function calculateVolume(radius) {
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}
