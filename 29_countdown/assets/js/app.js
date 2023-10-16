const getCounter = document.querySelector(".counter");
const getUl = document.querySelector("ul");
const getList = document.querySelectorAll("li");
const getInput = document.querySelector("input");

const getDate = new Date();
let inputValue = 0;

const hours = getDate.getHours();
const minutes = getDate.getMinutes();
const seconds = getDate.getSeconds();

getCounter.innerHTML = `${hours} : ${minutes}`;

getInput.addEventListener("input", (e) => {
  inputValue = Number(e.target.value * 60)+1;
  setTimerFunction(inputValue);
});

let timerId;

getUl.addEventListener("click", (e) => {
  console.log(Number(e.target.dataset.time)+1)
  setTimerFunction(Number(e.target.dataset.time)+1);
});

let setTimerFunction = (time) => {
  clearInterval(timerId);
  beBackDisplay(time);
  timerId = setInterval(() => {
    console.log(time);
    time--;
    if (time <= 0) {
      clearInterval(timerId);
    }
    dsplayTextTimer(time);
  }, 1000);
};

const dsplayTextTimer = (time) => {
  const minutes = Math.floor(time / 60);
  const secondsRemaind = time % 60;

  document.querySelector(".counter").innerText = `${minutes} : ${secondsRemaind < 10 ? "0" : ""}${secondsRemaind}`;
};

const beBackDisplay = (time) => {
  const now = Date.now();
  const beBackTime = now - time * 1000;
  const then = new Date(beBackTime);
  console.log(then);

  document.querySelector(".myParaf").innerText = `Be back at ${then.getHours()} : ${then.getMinutes()}`;
};