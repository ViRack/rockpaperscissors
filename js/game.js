

/*
    Key:
    1- rock
    2- paper
    3- scissors
*/
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
let userScore = 0;
let aiScore = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
 }

function roshambo(userChoice) {
    console.log("inside roshambo");

	let userImg 	= document.getElementById('user-choice-image');
	let aiImg 		= document.getElementById('ai-choice-image');
    let aiChoice 	= getRandomInt(1, 4);
    console.log(aiChoice);

    if (userChoice === ROCK) {
		userImg.src = '../images/rock.svg';
        if (aiChoice === ROCK) {
            document.getElementById("who-won").innerHTML = 'Draw!';
			aiImg.src = '../images/rock.svg';
            console.log("in rock: rock");
        }
        if (aiChoice === PAPER) {
			aiScore++;
            document.getElementById("who-won").innerHTML = 'Computer Wins!';
			aiImg.src = '../images/paper.svg';
            console.log("in rock: paper");
        }
        if (aiChoice === SCISSORS) {
            userScore++;
            document.getElementById("who-won").innerHTML = 'You Win!';
			aiImg.src = '../images/scissors.svg';
            console.log("in rock: scissors");
        }
    }
    
    if (userChoice === PAPER) {
		userImg.src = '../images/paper.svg';
        if (aiChoice === ROCK) {
            userScore++;
            document.getElementById("who-won").innerHTML = 'You Win!';
			aiImg.src = '../images/rock.svg';
            console.log("in paper: rock");
        }
        if (aiChoice === PAPER) {
            document.getElementById("who-won").innerHTML = 'Draw!';
			aiImg.src = '../images/paper.svg';
			console.log("in paper: paper");
        }
        if (aiChoice === SCISSORS) {
            aiScore++;
            document.getElementById("who-won").innerHTML = 'Computer Wins!';
			aiImg.src = '../images/scissors.svg';
            console.log("in paper: scissors");
        }
    }

    if (userChoice === SCISSORS) {
		userImg.src = '../images/scissors.svg';
        if (aiChoice === ROCK) {
            aiScore++;
            document.getElementById("who-won").innerHTML = 'Computer Wins!';
			aiImg.src = '../images/rock.svg';
            console.log("in scissors: rock");
        }
        if (aiChoice === PAPER) {
            userScore++;
            document.getElementById("who-won").innerHTML = 'You Win!';
			aiImg.src = '../images/paper.svg';
			console.log("in scissors: paper");
        }
        if (aiChoice === SCISSORS) {
            document.getElementById("who-won").innerHTML = 'Draw!';
			aiImg.src = '../images/scissors.svg';
			console.log("in scissors: scissors");
        }
    }
	
	document.getElementById("user-score").innerHTML = `Your Score is: ${userScore}`;
	document.getElementById("ai-score").innerHTML = `Computer Score is: ${aiScore}`;
}