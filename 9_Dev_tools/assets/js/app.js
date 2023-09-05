let p = document.querySelector('p');
const makeGreen = () => {
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
};

const dogs = [
    { name: 'Snikers', age: 2 },
    { name: 'Hugo', age: 8 }
];

// regular
console.log(dogs); 

// interpolated
console.log('Hello my name is %s string!', '+po');

//styled
console.log('%c Some great text', 'font-size: 20px');

// warning
console.warn('Oh NOOOOOOO')

// error
console.error('error')

// info
console.info('some info')

// testing

console.assert(1 === 1, 'that is negative')
console.assert(1 === 2, 'that is negative')

// clearing
console.clear()

// viewing dom elements
console.log(p)
console.dir(p)

// grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} old`)
    console.log(`${dog.age * 7} is dog year`)
    console.groupEnd(`${dog.name}`)
})

// counting
console.count('jovana')
console.count('jovana')
console.count('jovana')
console.count('tomo')
console.count('jovana')
console.count('tomo')
console.count('tomo')
console.count('jovana')
console.count('jovana')
console.count('tomo')

// timing
console.time('fetching data')
fetch('http://dspappfeed.data.auto-prod.vast.com/listings/-/cars?apikey=94231091513141001861128101466115&filter_location_range=n&format=json&include_fields=*&cap_financing=false')
.then(data => data.json())
.then(res => {
    console.timeEnd('fetching data')
})
.catch(err => console.log(err));

// table
console.table(dogs)