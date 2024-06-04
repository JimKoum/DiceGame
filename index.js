//dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

//dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

//winner
var winner = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
    winner.textContent= "Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){
    winner.textContent= "Player 2 Wins!";
}else{
    winner.textContent= "It's a Tie!";
}

//button
document.getElementById("btn").innnerHTML= "Roll Again";