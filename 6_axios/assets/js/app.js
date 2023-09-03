const inputField = document.querySelector("input");
let movies = document.querySelector(".content");
const getDiv = document.querySelector(".card");
let errorMessage = document.querySelector(".error-message");

const getData = async () => {
  try {
    let res = await axios({
      method: "get",
      url: "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",
    });
    
    inputField.addEventListener("input", (e) => {
      let movieData;
      word = e.target.value;
      if (e.target.value) {
        movieData = res.data.filter((item) => {
          return item.city.toLowerCase().includes(e.target.value.toLowerCase());
        });
      }
      if (!movieData || movieData.length <= 0) {
        getDiv.style.display = "none";
      }
      let mid = "";
      let left = "";
      let right = "";

      if (movieData) {
        movies.innerHTML = movieData.map((item) => {
            let getIndex = item.city.toLowerCase().indexOf(word.toLowerCase());

            //split string around input value index // this can also be done with new RegExp
            // tehere is room here for refactoring
            
            if (getIndex > -1) {
              mid = item.city.substr(getIndex, word.length);
              left = item.city.substr(0, getIndex);
              right = item.city.substr(getIndex + word.length);
            }

            getDiv.style.display = "block";

            return `
                <div class="box" id="custom-style">
                    <div class="columns">
                        <p class="column is-12 city-str">CITY: <span class="has-text-info-dark has-text-weight-bold">${left}<span class="highlight">${mid}</span>${right}</span></p>
                    </div>
                    <div class="columns">
                        <p class="column">STATE: <span class="is-size-5">${item.state}</p>
                        <p class="column has-text-right">POPULATION: ${Number(item.population).toLocaleString(undefined, {minimumFractionDigits: 0,})}</p>
                    </div>
                </div>
            `;
          })
          .join(" ");
      } else {
        movies.innerHTML = "";
      }
    });
  } catch (err) {
    return errorMessage.innerHTML = `<p>${err.message}</p>`
  }
};
getData();
