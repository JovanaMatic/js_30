const getArrows = document.querySelector('.arrow');
const getSpeed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
    console.log(data)
    getSpeed.textContent = Math.round(data.coords.speed);
    getArrows.style.transform = `rotate(${data.coords.heading}deg)`
}, (err) => {
    console.log(err);
});