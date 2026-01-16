// const player0E1 =document.querySelector(".player--0");
// const player1E1 =document.querySelector("player--1");
const score0E1 =document.querySelector("#score--0");
const score1E1 =document.getElementById("score--1");

const diceE1 =document.querySelector(".dice")
const btnRoll =document.querySelector(".btn--roll");
const btnNew =document.querySelector(".btn--new");
const btnHold =document.querySelector(".btn--hold");


score0E1.textContent =0;
score1E1.textContent =0;
diceE1.classList.add(".hidden");

btnRoll.addEventListener('click',function(){
    const dice =Math.trunc( Math.random() * 6) +1;
    diceE1.classList.remove(".hidden");
    diceE1.src = `./images/dice-${dice}.png`;
})