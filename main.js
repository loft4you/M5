let searchValue = document.getElementById("searchValue");
let searchBtn = document.getElementById("searchBtn");
let card = document.getElementById("card");
let start = document.getElementById("start");
let load = document.getElementById("load");

let dataCard;
async function getCard() {
  start.classList.add("none");
  load.classList.remove("none");
  card.classList.add("none");
  let response = await fetch(
    `https://api.github.com/users/${searchValue.value}`
  );
  if (response.ok) {
    dataCard = await response.json();
    console.log(dataCard);
    generateCard()
  } else {
    start.classList.remove("none");
  }
  load.classList.add("none");
  searchValue.value = "";
}

searchBtn.addEventListener("click", getCard);

function generateCard() {
    card.innerHTML = `<img src= '${dataCard.avatar_url}'/>
      <h1>${dataCard.login}</h1>
      <p>${dataCard.bio}</p>
      <nav>
        <div>
          <i class="fad fa-map-marker-alt"></i>
          <span>${dataCard.location}</span>
        </div>
        <div>
          <i class="far fa-heart"></i>
          <span>${dataCard.followers}</span>
        </div>
        <div>
          <i class="fal fa-books"></i>
          <span>${dataCard.public_repos}</span>
        </div>
      </nav>
      <a href="${dataCard.html_url}">Перейти</a>
    `
    card.classList.remove("none");
}