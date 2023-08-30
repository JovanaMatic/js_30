let hoursHandle = document.querySelector(".hours");
let minutesHandle = document.querySelector(".minutes");
let secondshandle = document.querySelector(".seconds");

setInterval(() => {
  let getTime = new Date();

  let seconds = getTime.getSeconds();
  let hours = getTime.getHours();
  let minutes = getTime.getMinutes();

  console.log(hours, minutes, seconds);

  let setSeconds = (seconds / 60) * 360;
  secondshandle.style.transform = `rotate(${setSeconds}deg)`;

  let setMinutes = (minutes / 60) * 360;
  minutesHandle.style.transform = `rotate(${setMinutes}deg)`;

  let setHours = (hours / 12) * 360;
  hoursHandle.style.transform = `rotate(${setHours}deg)`;
}, 1000);
