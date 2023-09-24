// source MDN https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const getUl = document.querySelector("ul");


recognition.lang = "en-US";
recognition.interimResults = true; // see the typing realtime
recognition.maxAlternatives = 1; // no need for alternatives so we will keep 1 as a default


let color = "";

let p = document.createElement('p');
const getElement = document.querySelector(".myWords");
getElement.appendChild(p);

//start speech recognition
recognition.addEventListener("result", event => {
  const words = Array.from(event.results)
    .map(item => item[0])
    .map(result => result.transcript)
    .join("");

    p.textContent = words;
    
    if (event.results[0].isFinal) {
        p = document.createElement('p');
        getElement.appendChild(p);
      }

  if (words.toLowerCase().includes("red")) {
    //color = "red";
    p.style.color = "red";
  }
  let peopleStar = [];

  if (words.toLowerCase().includes("star") || words.toLowerCase().includes("wars")) {
    const getData = async () => {
      let data = await fetch("https://swapi.dev/api/people/?page=1");
      let response = await data.json();

      peopleStar.push(
        response.results.map((item) => `<li>${item.name}</li>`).join("")
      );
      getUl.innerHTML = peopleStar;
    };
    getData();
  };
});

//start speech rec again when we stop speaking
recognition.addEventListener("end", recognition.start);

recognition.start();
