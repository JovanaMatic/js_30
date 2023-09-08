const getPlayer = document.querySelector("video");

const playButton = document.querySelector(".btn_play");
const forwardButton = document.querySelector(".btn_for");
const backButton = document.querySelector(".btn_back");
const speedRange = document.querySelector(".speed");
const volumeRange = document.querySelector(".volume");
const barProgress = document.querySelector(".progress");
const videoView = document.querySelector('.player');
const controls = document.querySelector(".custom_controls");


videoView.addEventListener("click", (e) => {
  if(e.target.className.includes('video_view') || e.target.className === 'fas fa-play' || e.target.className === 'fas fa-pause') {
   
    if (getPlayer.paused === true) {
        getPlayer.play();
        playButton.innerHTML = `<i class="fas fa-pause"></i>`;

      } else {
        getPlayer.pause();
        playButton.innerHTML = `<i class="fas fa-play"></i>`;
      }
  }
  
});

getPlayer.addEventListener('timeupdate', () => {
    styleProgress = (getPlayer.currentTime / getPlayer.duration) * 100;
    barProgress.style.width = `${styleProgress}%`;
})

forwardButton.addEventListener("click", () => {});

volumeRange.addEventListener("input", (e) => {
  getPlayer.volume = e.target.value / 100;
});

speedRange.addEventListener("input", (e) => {
  getPlayer.playbackRate = e.target.value * 0.1;
});

forwardButton.addEventListener("click", () => {
  getPlayer.currentTime += 2.5;
});

backButton.addEventListener("click", () => {
  getPlayer.currentTime -= 1;
});

document.querySelector('.progress_bar').addEventListener('click', (e) => {
    console.log(e.offsetX, barProgress.offsetWidth, getPlayer.duration)
    const grabTime = (e.offsetX / 800) * getPlayer.duration
    getPlayer.currentTime = grabTime;
})

document.querySelector('.btn_full').addEventListener('click', () => {
    getPlayer.classList.toggle('full_width');
    getPlayer.classList.toggle('full_height');
    controls.classList.toggle('full_width');
    controls.classList.toggle('bottom_class');

})


