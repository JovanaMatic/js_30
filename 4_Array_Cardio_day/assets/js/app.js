const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Jihannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beetowen, Ludwig",
  "Begin, Menanchem",
  "Belloc, Hilaire",
  "Bellow, Sail",
  "Benchley, Robert",
  "Benenson, Peter",
  "BenGurion, David",
  "Benjamin, Walter",
  "Benn, Tonny",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Loyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birell, Augustine",
  "Back, Elk",
  "Blaire, Robert",
  "Blaire, Tony",
  "Blake, William",
];

// filter the list of inventors for those who were born in the 1500s

let filteredByYear = inventors.filter((item) => {
  return item.year >= 1500 && item.year <= 1600;
});

// give us an array of the inventors first and last names

let fullNames = inventors.map((item) => {
  return item.first + " " + item.last;
});

// sort the inventors by birthdate, oldest to yungest

let years = inventors.sort((a, b) => {
  return a.year - b.year;
});

// How many years did all the inventors live / reduce

let howmanyYears = inventors.reduce((total, item) => {
  return total + (item.passed - item.year);
}, 0);

// sort invetors by years lived / sort

let yearsLived = inventors
  .map((item) => {
    let sum = item.passed - item.year;
    item.lived = sum;
    return item;
  })
  .sort((a, b) => a.lived - b.lived);

// create the list of bulevards in paris that contains 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// let boulevards = document.querySelectorAll('.mw-content-ltr li a')
// let hdhd = Array.from(boulevards).filter(item => item.innerText.includes('de'));

// sort people array alphabetically by last name

let nameSort = inventors.sort((a, b) => {
  return a.last - b.last;
});

let peopleSort = people.sort((a, b) => a - b);

let sortLastname = people.sort((a, b) => {
  let indexA = a.indexOf(" ");
  let indexB = b.indexOf(" ");

  if (a.charAt(indexA + 1) > b.charAt(indexB + 1)) {
    return 1;
  } else {
    return -1;
  }
});

// Reduce excersise - sum the instances of each elem

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

let countInstances = data.reduce((acc, cur) => {
  return acc[cur] ? ++acc[cur] : (acc[cur] = 1), acc;
}, {});

// code wars kata : https://www.codewars.com/kata/561e1e2e6b2e78407d000011

function closestPairTonum(n) {
  for (let i = n - 1; i >= 1; i--) {
    for (let j = i - 1; j >= 1; j--) {
      if (Math.sqrt(i + j) % 1 === 0 && Math.sqrt(i - j) % 1 === 0) {
        return [i, j];
      }
    }
  }
}
console.log(closestPairTonum(10));
