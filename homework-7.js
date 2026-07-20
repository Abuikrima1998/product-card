function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}
showWeather("Нальчик", 25);


const SPEED_OF_LIGHT = 299792458;
function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость")
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  }
  else {
    console.log("Скорость света");
  }
}
checkSpeed(100);
checkSpeed(2997922458);
checkSpeed(400000000);


const product = "Книга";
const price = 800;

function buyProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретен. Спасибо за покупку!`);
  }
  else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}
buyProduct(500);
buyProduct(1000);


const book = "Коран";
const currentPage = 604;
const totalPages = 604;
function finishBook() {
  console.log(`${book} прочитан. Прочитано ${currentPage} из ${totalPages} страниц.`);
}
finishBook();