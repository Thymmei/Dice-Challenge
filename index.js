//Adding image

//Create randomnumber

//for image 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imageSource1 = "./images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", imageSource1);

//for image 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageSource2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", imageSource2);

//change the title
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 Wins";
} else {
  document.querySelector("h1").innerText = "Draw";
}
