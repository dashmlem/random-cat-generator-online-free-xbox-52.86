const url = "https://api.thecatapi.com/v1/images/search";
const section = document.querySelector(".container");
const button = document.querySelector(".btn");

button.addEventListener("click", getRandomCatImage); // Исправлено название функции

const randomCatPhoto = (json) => {
  let photo = json[0].url;
  section.classList.add("cats");

  let image = document.createElement("img");
  image.src = photo;
  image.classList.add("random_cats");
  image.alt = "Random cat image"; // Устанавливаем атрибут alt
  section.appendChild(image); // Добавляем изображение в section
};

async function getRandomCatImage() {
  section.innerHTML = ""; // Очищаем контейнер перед добавлением нового изображения
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log("JSON:", json);
    randomCatPhoto(json); // Вызываем randomCatPhoto
  } catch (e) {
    console.error("Ошибка при получении изображения кота:", e); // Исправлено название переменной
  }
}

getRandomCatImage(); // Загружаем котика при загрузке страницы
