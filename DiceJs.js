document.querySelector("h1").innerHTML = "Refresh Me!";
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomImage1 = "dice" + randomNumber1 + ".png";
var imageSource1 = "images/" + randomImage1;

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var imageSource2 = "images/" + randomImage2;

//alert(imageSource);
var image1 = document.querySelectorAll("img.img1")[0];
var image2 = document.querySelectorAll("img.img2")[0];
//alert(image1);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 player1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player2 Wins!"
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}

image1.setAttribute("src", imageSource1);
image2.setAttribute("src", imageSource2);
