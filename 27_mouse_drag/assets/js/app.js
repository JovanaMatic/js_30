const getAllDivs = document.querySelectorAll('.all-divs');
const getContainer = document.querySelector('.container');

let startMouse;
let xEnd;
let isClicked = false;

getContainer.addEventListener('mousedown', (e) => {
    isClicked = true;

    // remove margin value with offser from an element (if there is a margin):
    // keep first position of a mouse xStart
    startMouse = e.pageX - getContainer.offsetLeft;
    // keep the last position of the mouse so that we can continue scrolling from there
    xEnd = getContainer.scrollLeft;
});
getContainer.addEventListener('mouseup', (e) => {
    // keep track if the mouse is clicked and update when the mouse is not pressed
    isClicked = false;
});

getContainer.addEventListener('mouseleave', (e) => {
    // keep track if the mouse is clicked
    isClicked = false;
})

getContainer.addEventListener('mousemove', (e) => {
    // stop firing an event when mouse is moved but not clicked
    if(!isClicked) return;

    // prevent selecting the text or any other element
    e.preventDefault();

    // recalculate initial postition of a mouse to avoid additional sliding to the next click
    let startX = e.pageX - getContainer.offsetLeft;

    // start the scroll from the last known mouse position - startX
    let startScroll = startX - startMouse;
    
    if(isClicked) {
        getContainer.scrollLeft = xEnd - startScroll;
    }
});




