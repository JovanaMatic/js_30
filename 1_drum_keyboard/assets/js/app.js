let letters = document.querySelectorAll(".drums");
let audios = document.querySelectorAll("audio");

function playAudio(id) {
    document.getElementById(id).currentTime = 0;
    document.getElementById(id).play();
}

window.addEventListener("keydown", (e) => {
  if (e.key === "a") {
    document.getElementById("a").classList.add("active");
    playAudio("aa")
    
  } else if (e.key === "s") {
    document.getElementById("s").classList.add("active");
    playAudio("ss")
  } else if (e.key === "d") {
    document.getElementById("d").classList.add("active");
    playAudio("dd")
  } else if (e.key === "f") {
    document.getElementById("f").classList.add("active");
    playAudio("ff")
  } else if (e.key === "g") {
    document.getElementById("g").classList.add("active");
    playAudio("gg")
  } else if (e.key === "h") {
    document.getElementById("h").classList.add("active");
    playAudio("hh")
  } else if (e.key === "j") {
    document.getElementById("j").classList.add("active");
    playAudio("jj")
  } else if (e.key === "k") {
    document.getElementById("k").classList.add("active");
    playAudio("kk")
  } else if (e.key === "l") {
    document.getElementById("l").classList.add("active");
    playAudio("ll")
  }

  for (let i = 0; i < letters.length; i++) {
    setTimeout(() => {
      letters[i].classList.remove("active");
    }, 100);
  }
});
