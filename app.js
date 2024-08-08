//----Constants----//

const cupEls = document.querySelectorAll(".cup");

const ballEls = document.querySelectorAll(".ball");

const startEl = document.querySelector("#startGame");

const resetEl = document.querySelector("#Reset")

//----Variables----//

let cups = ["", "", "", "", ""];

let win = false;

let lose = false;

let message = "";

let randomPosition = Math.floor(Math.random()*cups.length)
console.log(randomPosition)

let totalBallCount = 3

//----Functions----//

