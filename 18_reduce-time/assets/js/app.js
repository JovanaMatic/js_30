const getDataTime = document.querySelectorAll('li');
let seconds = [];
let minutes = [];

Array.from(getDataTime).map(item => {
    seconds.push(item.dataset.time.split(':')[1])
    minutes.push(item.dataset.time.split(':')[0])

})

let secSum = seconds.reduce((acc, cur) => {
    return parseInt(acc) + parseInt(cur);
},0)

let minSum = minutes.reduce((acc, cur) => {
    return parseInt(acc) + parseInt(cur);
},0);

const sumTimes = (secSum, minSum) => {
    let turnIntoSec = secSum + minSum*60;
    
    let getHours = Math.floor(turnIntoSec/3600)
    
    let getMinutes = Math.floor(((turnIntoSec/3600) % 1) * 60);
    
    let getSec = turnIntoSec - ((getHours*3600) + (getMinutes*60))
    console.log(getSec)
    
    console.log(`${getHours}:${getMinutes}:${getSec}`)
    return `${getHours}:${getMinutes}:${getSec}`
}

sumTimes(secSum, minSum);