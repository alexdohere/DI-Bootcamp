// Daily challenge: Stars
// Write a JavaScript program that recreates the pattern below.

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

// Do this challenge twice: first by using one loop, then by using two nested for loops

for (i = 0; i < 6; i++) {
  console.log("* ".repeat(i + 1));
}

for (i = 0; i < 6; i++) {
  let stars = "";
  for (u = 0; u <= i; u++) {
    stars += "* ";
  }
  console.log(stars);
}
