const canvas = document.querySelector('#draw');
console.log(canvas)
const cnTx = canvas.getContext('2d');

// define dimensions of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//define drawing line
cnTx.strokeStyle = '#BADA55';
cnTx.lineJoin = 'round';
cnTx.lineCap = 'round';
cnTx.lineWidth = 0;

let isDRawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

canvas.addEventListener('mousemove', (e) => {
    //this function will run only when the isDrawing is true => mousedown event
    if(!isDRawing) {
        return;
    }
    cnTx.beginPath();
    cnTx.moveTo(lastX, lastY);
    cnTx.lineTo(e.offsetX, e.offsetY);
    cnTx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
    cnTx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    hue++;
    
    if(cnTx.lineWidth >= 100 || cnTx.lineWidth <= 1) {
        direction = !direction;
    }
    if(direction) {
        cnTx.lineWidth++;
    }else{
        cnTx.lineWidth--;
    }
})

//when start drawing
canvas.addEventListener('mousedown', (e) => {
    isDRawing = true;
    //update the lastX and lastY not to start from the previous position
    [lastX, lastY] = [e.offsetX, e.offsetY];

});
//when stop drowing
canvas.addEventListener('mouseup', () => {
    isDRawing = false;
});
//if mouse leaves window
canvas.addEventListener('mouseout', () => {
    isDRawing = false;
});