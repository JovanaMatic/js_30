let spaceSlider = document.querySelector('#spacing');
let blurSlider = document.querySelector('#blur');
let colorSlider = document.querySelector('#colorpicker');

let getImage = document.querySelector('img');
let heroImage = document.querySelector('.hero-image');
let spanEl = document.querySelector('span')

spaceSlider.addEventListener('input', (e) => {
    let spaceValue = e.target.value;
    heroImage.style.translate = `${spaceValue*2}px`
});

blurSlider.addEventListener('input', (e) => {
    let blurValue = e.target.value;
    getImage.style.filter = `blur(${blurValue/10}px)`
});

colorSlider.addEventListener('input', (e) => {
    let colorValue = e.target.value;
    heroImage.style.backgroundColor = `${colorValue}`
    spanEl.style.color = `${colorValue}`
})