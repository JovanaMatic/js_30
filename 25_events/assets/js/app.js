const getDivs = document.querySelectorAll('div');
const getButton = document.querySelector('button');

function eventFunc(e) {
    console.log(this);
    // stopping bubling
   // e.stopPropagation();
};

for(let i = 0; i < Array.from(getDivs).length; i++) {
    Array.from(getDivs)[i].addEventListener('click', eventFunc, {
        capture: false,
        // fire event only once
        once: true
    })
};

function clickOnce() {
    
}
getButton.addEventListener('click', () => {
    const elemH1 = document.createElement('h1');
    elemH1.innerText = 'Clicked only once!'
     document.querySelector('body').appendChild(elemH1);
}, { once: true })

// "once" property is usefull if we want a button to be clicked only once