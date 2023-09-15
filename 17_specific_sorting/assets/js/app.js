const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Countreparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const articles = ["A ", "An ", "The "];
const getUl = document.querySelector("ul");
const getButton = document.querySelector("button");
let sortedBands = [];

const outputData = (data) => {
  let getData = data
    .map((item) => {
      return `
            <li>${item}</li>
        `;
    }).join("");

  return getData;
};

getUl.innerHTML = outputData(bands);

getButton.addEventListener("click", () => {
  sortedBands = bands.sort((a, b) => {
    articles.map((elem) => {
      if (a.includes(elem)) {
        a = a.substring(elem.length);
      }
      if (b.includes(elem)) {
        b = b.substring(elem.length);
      }
    });
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });

  getUl.innerHTML = outputData(sortedBands);
});

// this can be done with regual wxpression
// .replace(/^(a |the |an )/i, '')
