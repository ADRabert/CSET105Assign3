let playerScore = 0, cpuScore = 0;
const resultdiv = document.getElementById("result"), newElem = (str) => {
	const elem = document.createElement("p");
	elem.innerHTML = str;
	resultdiv.append(elem);
}, rpsWin = () => {
	newElem(`<strong>You win!<strong>`);
	playerScore++;
}, rpsLose = () => {
	newElem(`<strong>You lose.<strong>`);
	cpuScore++;
}, rpsSelect = (choice) => {
	if (resultdiv.innerHTML !== "") resultdiv.innerHTML = "";
	newElem(`You selected ` + choice + `.`);
	const cpuInt = Math.floor(Math.random() * 3);
	if (cpuInt === 0) var cpuChoice = "rock";
	else if (cpuInt === 1) var cpuChoice = "paper";
	else var cpuChoice = "scissors";
	newElem(`The opponent selected ` + cpuChoice + `.`);
	if (choice === cpuChoice) newElem(`<strong>It's a draw.<strong>`);
	else if (choice === "rock") {
		if (cpuChoice === "paper") rpsLose();
		else rpsWin();
	} else if (choice === "paper") {
		if (cpuChoice === "rock") rpsWin();
		else rpsLose();
	} else {
		if (cpuChoice === "rock") rpsLose();
		else rpsWin();
	}
	newElem(`Your score: ` + playerScore + `; Opponent's score: ` + cpuScore);
}