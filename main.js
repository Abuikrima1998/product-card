const firstProductCard = document.querySelector (".card");
const changeColorFirstCardButton = document.querySelector ("#change-color-first-card");
changeColorFirstCardButton.addEventListener ("click", () => {
  firstProductCard.style.backgroundColor = "khaki";
});

const productCards = document.querySelectorAll(".card");
const changeColorAllCardsButton = document.querySelector("#change-color-all-cards");
changeColorAllCardsButton.addEventListener("click", () => {
  productCards.forEach((card) => {
    card.style.backgroundColor = "khaki";
  });
});

const openGoogleButton = document.querySelector ("#open-google-button");
openGoogleButton.addEventListener("click", () => {
  window.open ("https://google.com");
});

const showMessageButton = document.querySelector ("#show-message-button");
showMessageButton.addEventListener ("click", () => {
  console.log ("Кнопка нажата!");
  alert("Кнопка нажата!");
});

const pageTitle = document.querySelector (".page__title");
pageTitle.addEventListener ("mouseover", () => {
  console.log(pageTitle.textContent);
});

const changeButtonColor = document.querySelector ("#change-button-color");
changeButtonColor.addEventListener ("click", () => {
  changeButtonColor.classList.toggle ("active-button");
});