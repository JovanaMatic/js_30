const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

console.log('hello');

const getVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
        //video.src = window.URL.createObjectURL(localMediaStream); - this is deprecated
        //https://stackoverflow.com/questions/51101408/deprecation-of-createobjecturl-and-replace-with-the-new-htmlmediaelement-srcobje
        video.srcObject = localMediaStream
        video.play();
    })
    .catch(err => {
        alert('Ups, something is wrong', err)
    })
};
getVideo();


// get the image frame and paint it on canvas / canvas and video needs to be the same height / width
const getFrame = () => {
    const width = video.videoWidth;
    const height = video.videoHeight;
    

    canvas.width = width;
    canvas.height = height;
    // error: Failed to execute 'drawImage' on 'CanvasRenderingContext2D': Overload resolution failed.
    // mised video in the params

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        
        let pixels = ctx.getImageData(0, 9, width, height);
        pixels = greenScreen(pixels);
        ctx.putImageData(pixels, 0, 0);
    },16);
};

const takePhoto = () => {
    snap.currentTome = 0;
    snap.play();

    //take photo
    const data = canvas.toDataURL('image/jpeg')
    //create link element
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'pretty');

    link.innerHTML = `<img src="${data}" alt="Pretty Dzo" />`;
    console.log(link.innerHTML)
    strip.insertBefore(link, strip.firstChild)
};

const redEffect = (pixels) => {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i] = pixels.data[i] + 100;
        pixels.data[i+1] = pixels.data[i+1] - 50;
        pixels.data[i+2] = pixels.data[i+2] * 0.5;
    }
    return pixels;
};

const rgbSplit = (pixels) => {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i-150] = pixels.data[i] + 100;
        pixels.data[i+100] = pixels.data[i+1] - 50;
        pixels.data[i-150] = pixels.data[i+2] * 0.5;
    }
    return pixels;
};

const greenScreen = (pixels) => {
    const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

// paint video to canvas when video plays


video.addEventListener('canplay', getFrame);

