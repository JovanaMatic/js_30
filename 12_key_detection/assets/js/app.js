let newArr = [];
let arr = ['ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'ArrowUp', 'ArrowDown', 'w', 'a', 'w', 'a', 'Enter'];
const gifImage = document.querySelector('img');
const h1 = document.querySelector('h1');

window.addEventListener('keyup', (e) => {
    newArr.push(e.key);
    
    if(newArr.length === 13) {
        if(newArr.join(',') === arr.join(',')){
            gifImage.setAttribute('src', 'https://media.tenor.com/BelPRtxDqxQAAAAC/spaceinvaders-videogames.gif');
            h1.innerText = `Prepare to be destroyed!!!`;
        }
    }
})
