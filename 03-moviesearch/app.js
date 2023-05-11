const form = document.querySelector("#formWrapper");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".buttons");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imgListWrapper = document.querySelector("#imgListWrapper");

runEventListeners();

function runEventListeners() {
  form.addEventListener("submit", search);
  clearButton.addEventListener("click", clear);
}

function clear() {
  searchInput.value = "";
  imgListWrapper.innerHTML = "";
}

function search(e) {
  const value = searchInput.value.trim();

  fetch(
    `https://advanced-movie-search.p.rapidapi.com/search/movie?query=${value}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c54c1e0f53msh09fa8ebf2f672b7p1fd6e3jsn48f866a7a264",
        "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      Array.from(data.results).forEach((image) => {
        addImageToUI(image.poster_path);
      });
    })
    .catch((err) => console.log(err));

  e.preventDefault();
}

function addImageToUI(url) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.setAttribute("src", url);

  div.append(img);
  imgListWrapper.append(div);
}
