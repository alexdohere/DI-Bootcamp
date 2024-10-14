// In your Javascript file, use setInterval to move the <div id="animate"> to the right side
//  of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every millisecond,
//  until it reaches the end of the <div id="container">.

function myMove() {
  let boxElement = document.getElementById("animate");
  let containerWidth = document.getElementById("container").clientWidth;
  let position = 0;

  let intervalId = setInterval(function () {
    if (position < containerWidth - boxElement.clientWidth) {
      position++;
      boxElement.style.left = position + "px";
    } else {
      clearInterval(intervalId);
    }
  }, 1);
}
