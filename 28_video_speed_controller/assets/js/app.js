const getVideo = document.querySelector('video');
const getProgressBar = document.querySelector('.color-controler');
const getSpeedBar = document.querySelector('.speed-controler');

getSpeedBar.addEventListener('mousemove', (e) => {
  //console.log(e.pageY);
  
  const y = (e.pageY - getSpeedBar.offsetTop)-80;
  const percent = y / getSpeedBar.offsetHeight;
  
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent*100);
  if(height >= 100 ) return;

  getProgressBar.style.height = height + '%';

  const videoRate = max * percent;
  getVideo.playbackRate = videoRate;

  getProgressBar.textContent = videoRate.toFixed(2) + 'x';

});