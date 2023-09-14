const getText = document.querySelector('h1');

document.querySelector('.main').addEventListener('mousemove', (e) => {

    let x = e.offsetX;
    let y = e.offsetY;

    let width = document.querySelector('.main').offsetWidth;
    let height = document.querySelector('.main').offsetHeight;

    // fix listening on a div element that has children
    if(e.target.localName !== 'h1') {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    };

    const xShadow = Math.round((x / width * 100) - 50);
    const yShadow = Math.round((y / height * 100) - 50);

    getText.style.textShadow = `${xShadow}px ${yShadow}px black`;
})

