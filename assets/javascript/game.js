let resetNumber = document.querySelector("#num-resets");
let resets = 0;

let resetButton = document.querySelector("#reset-button");

let team1NumShots = document.querySelector("#teamone-numshots");
let team1shots = 0;
let team1NumGoals = document.querySelector("#teamone-numgoals");
let team1goals = 0;
let team1MessageBox = document.querySelector("#team-one-message");
let team1message = "Let's play!";
team1MessageBox.innerHTML = team1message;

let team1Button = document.querySelector("#teamone-shoot-button");

let team2NumShots = document.querySelector("#teamtwo-numshots");
let team2shots = 0;
let team2NumGoals = document.querySelector("#teamtwo-numgoals");
let team2goals = 0;
let team2MessageBox = document.querySelector("#team-two-message");
let team2message = "Let's play!";
team2MessageBox.innerHTML = team2message;

let team2Button = document.querySelector("#teamtwo-shoot-button");

let left = document.querySelector(".left");
let right = document.querySelector(".right");

function update() {
    team1NumGoals.innerHTML = team1goals;
    team1NumShots.innerHTML = team1shots;
    team2NumGoals.innerHTML = team2goals;
    team2NumShots.innerHTML = team2shots;
    team1MessageBox.innerHTML = team1message;
    team2MessageBox.innerHTML = team2message;
};

resetButton.addEventListener("click", function () {
    alert("Game reset!");
    resets += 1;
    resetNumber.innerHTML = resets;
    team1shots = 0;
    team1goals = 0;
    team2shots = 0;
    team2goals = 0;
    update();
    team1MessageBox.innerHTML = "Let's play again!";
    team2MessageBox.innerHTML = "Let's play again!";
    left.style.backgroundColor = "rgba(255,255,255,0.7)";
    right.style.backgroundColor = "rgba(255,255,255,0.7)";
});

team1Button.addEventListener("click", function () {
    team1shots += 1;
    randomNumber = Math.floor(Math.random() * 5);
    if (randomNumber > 1){
        team1goals += 1;
        team1message = "&#127936; Swish! &#127936;";
    } else {
        team1message = "Airball! &#129318;";
    }
    update();
});

team2Button.addEventListener("click", function () {
    team2shots += 1;
    randomNumber = Math.floor(Math.random() * 5);
    if (randomNumber > 1){
        team2goals += 1;
        team2message = "&#127936; Swish! &#127936;";
    } else {
        team2message = "Airball! &#129318;";
    }
    update();
});


//  Color Randomizer

let randomLeft = document.querySelector("#randomizer-one");
let randomRight = document.querySelector("#randomizer-two");

randomLeft.addEventListener("click", function () {
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);
    console.log("Color on left is rgb(" + random1 + ", " + random2 + ", " + random3 + ")");
    left.style.backgroundColor = "rgba(" + random1 + "," + random2 + "," + random3 + ",0.5)";
})

randomRight.addEventListener("click", function () {
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);
    console.log("Color on right is rgb(" + random1 + ", " + random2 + ", " + random3 + ")");
    right.style.backgroundColor = "rgba(" + random1 + "," + random2 + "," + random3 + ",0.5)";
})