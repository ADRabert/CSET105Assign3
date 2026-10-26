let playerScore = 0, cpuScore = 0;
const resultdiv = document.getElementById("result"), newElem = (str) => {
	const elem = document.createElement("p");
	elem.innerHTML = `${str}`;
	resultdiv.append(elem);
}, rpsDraw = () => {
	newElem(`It's a draw.`);
	newElem(`Your score: ` + playerScore + `; Opponent's score: ` + cpuScore);
}, rpsWin = () => {
	newElem(`You win!`);
	newElem(`Your score: ` + ++playerScore + `; Opponent's score: ` + cpuScore);
}, rpsLose = () => {
	newElem(`You lose.`);
	newElem(`Your score: ` + playerScore + `; Opponent's score: ` + ++cpuScore);
}, rpsSelect = (choice) => {
	if (resultdiv.innerHTML !== "") resultdiv.innerHTML = "";
	newElem(`You selected ` + choice + `.`);
	const cpuInt = Math.floor(Math.random() * 3);
	if (cpuInt === 0) var cpuChoice = "rock";
	else if (cpuInt === 1) var cpuChoice = "paper";
	else var cpuChoice = "scissors";
	newElem(`The opponent selected ` + cpuChoice + `.`);
	if (choice === cpuChoice) rpsDraw();
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
}