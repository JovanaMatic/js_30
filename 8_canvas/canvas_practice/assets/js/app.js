const canvas = document.querySelector('#canvas');
const cntx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArray;

//draw particles on canvas

function Particle(x,y,directionX,directionY,size,color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
};

//create a drawing method on a Particle constructor
//move this method to a separate function since we don't want to copy it for every Particle instance
Particle.prototype.draw = function(){
    cntx.beginPath()
    cntx.arc(this.x,this.y,this.size,0,Math.PI*2,false);
    cntx.fillStyle = this.color; 
    cntx.fill();
}

const particle1 = new Particle(100,100,1,1,20,'white');
particle1.draw();

// add update method to particles
Particle.prototype.move = function() {
    if(this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.directionX = -this.directionX;
    }
    if(this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;
    
    this.draw();
}
function init() {
    particArray = [];

    for(let i = 0; i < 100; i++) {
        let size = Math.random() * 20;
        let x = Math.random() * (innerWidth - size * 2 );
        let y = Math.random() * (innerHeight - size * 2);
        let directionX = (Math.random() * .4) - .2;
        let directionY = (Math.random() * .4) - .2;
        let color = 'white';
        
        particArray.push(new Particle(x, y, directionX, directionY, size, color));

    }
}

function animate() {
    requestAnimationFrame(animate);
    cntx.clearRect(0, 0, innerWidth, innerHeight);

    for(let i = 0; i < particArray.length; i++) {
        particArray[i].move();
    }
}

init();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})


