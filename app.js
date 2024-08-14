//----Constants----//
const cupEls = document.querySelectorAll(".cup");
const startEl = document.querySelector("#startGame");
const resetEl = document.querySelector("#reset");
const messageEl = document.querySelector("#message");

//----Variables----//
let cups = ["", "", "", "", ""];
let currentRound = 1;
let ballCount = 3;
let foundBalls = 0;

//----Functions----//
function ballGeneration() {
    cups = ["", "", "", "", ""];
    let availableSpots = [...Array(cups.length).keys()];

    for (let i = 0; i < ballCount; i++) {
        let randomIndex = Math.floor(Math.random() * availableSpots.length);
        let randomPosition = availableSpots[randomIndex];
        cups[randomPosition] = "ball";
        availableSpots.splice(randomIndex, 1);
    }
}

function startGame() {
    ballGeneration();
    startEl.style.display = "none";
    resetEl.style.display = "none";
    messageEl.textContent = `Round ${currentRound}: Find ${ballCount} balls`;
    cupEls.forEach(cupEl => {
        cupEl.addEventListener("click", checkCup);
    });
}

function resetGame() {
    currentRound = 1;
    ballCount = 3;
    foundBalls = 0;
    startEl.style.display = "block";
    resetEl.style.display = "none";
    messageEl.textContent = "";
    cupEls.forEach(cupEl => {
        cupEl.removeEventListener("click", checkCup);
        cupEl.querySelector("img").src = "https://www.clker.com/cliparts/c/v/W/h/v/Z/silver-cup-md.png"; // Reset all cups to initial state
    });
}

function checkCup(event) {
    const cupIndex = event.currentTarget.getAttribute("data-index");
    const cupImg = event.currentTarget.querySelector("img");

    if (cups[cupIndex] === "ball") {
        foundBalls++;
        cupImg.src = "https://static.vecteezy.com/system/resources/thumbnails/011/421/504/small_2x/blue-glossy-ball-png.png";
        if (foundBalls === ballCount) {
            if (currentRound === 3) {
                messageEl.textContent = "Congratulations! You won the game!";
                endGame();
            } else {
                // Show congratulations message before moving to the next round
                messageEl.textContent = `Congratulations! You found all ${ballCount} balls!`;
                setTimeout(nextRound, 1500); // 1.5 seconds delay before starting the next round
            }
        }
    } else {
        // Show that there's no ball
        cupImg.src = "https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_1280.png"; // Temporary image to indicate no ball
        
        // After a brief delay, revert to original cup image
        setTimeout(() => {
            cupImg.src = "https://www.clker.com/cliparts/c/v/W/h/v/Z/silver-cup-md.png";
            messageEl.textContent = "You lost! Game over!";
            endGame();
        }, 1500); // 1.5 second delay before reverting back
    }
}

function nextRound() {
    currentRound++;
    ballCount--;
    foundBalls = 0;
    cupEls.forEach(cupEl => {
        cupEl.querySelector("img").src = "https://www.clker.com/cliparts/c/v/W/h/v/Z/silver-cup-md.png";
    });
    ballGeneration();
    messageEl.textContent = `Round ${currentRound}: Find ${ballCount} balls`;
}

function endGame() {
    cupEls.forEach(cupEl => {
        cupEl.removeEventListener("click", checkCup);
    });
    resetEl.style.display = "block";
}

//----Event Listeners----//
startEl.addEventListener("click", startGame);
resetEl.addEventListener("click", resetGame);
