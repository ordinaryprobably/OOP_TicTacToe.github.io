import Background from "./background.js";
import Rule from "./checkWinner.js";

const playBtn = document.querySelector('.playBtn');
const resetBtn = document.querySelector('.resetBtn');

const background = new Background();
const rule = new Rule();

background.makeDivHor();
background.makeNineBoxes();

playBtn.addEventListener('click', rule.playGame)
resetBtn.addEventListener('click', rule.resetGame)
