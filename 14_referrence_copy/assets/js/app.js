// start with strings numbers and booleans
// variables, strings are not mutable

// let age = 40;
// let age2 = age;
// console.log(age, age2);
// age = 38;
// console.log(age, age2);

// example: we use this when trying to switch variables places

// let myName = 'Jovana';
// let name2 = myName;
// console.log(myName, name2);
// myName = 'jovanaDzo'
// console.log(myName, name2);

// arrays / referrence sopy

let players = ['Milutinov', 'Bogdanovic', 'Avramovic', 'Jovic'];
let team = players;

players[4] = 'Dobric';


//console.log(team) //Output: ['Milutinov', 'Bogdanovic', 'Avramovic', 'Jovic', 'Dobric']
// Dobric is added on both players and team array since team is a referrence to players / arrays ARE mutables

// creating a copy of an array:

// 1. I use slice()
 const team2 = players.slice();
 team2.pop()
 console.log(players, team2)

 // 2. concat
 const team3 = [].concat(players);
 console.log(team3);

 // 3. spread
const team4 = [...players];
console.log(team4);

// 4. Array.from()
const team5 = Array.from(players);
players[5] = 'Guduric';
console.log(team5, players);

// OBJECTS

const person = {
    name: 'Jovana',
    age: 38
};

// shallow copies / 1 level deep

// 1. Object.assign()

const person2 = Object.assign({}, person, { number: 99 });
console.log(person, person2);

const person3 = Object.assign({}, person, { number: 99, age: 12 });
console.log(person, person2, person3);


// deep copies
const vin = {
    price: 44000,
    image_count: 1,
    dealer: {
        dealer_id: 12345,
        dealer_name: 'dealership'
    }
};

const vin2 = Object.assign({}, vin);

//vin2.dealer.dealer_id = 11111;
//console.log(vin.dealer.dealer_id, vin2.dealer.dealer_id); // Output: 11111 11111
// when we do a shellow copy and change propertie inside of dealer obejct of a copy object
// it will change the original vin object as well
// use JSON.parse and JSON.stringify a mentioned on FE interview
const person4 = JSON.parse(JSON.stringify(vin));
person4.dealer.dealer_id = 11111;
console.log(vin.dealer.dealer_id, person4.dealer.dealer_id)  // Output: 12345 11111

// stackoverflow resource: https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript


