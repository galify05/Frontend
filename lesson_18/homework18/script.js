// Поработайте с двумя новыми APi:

// одна дает случайные факты о кошках https://catfact.ninja/fact другая случайные фото кошек https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1

// заберите данные из API и отобразите на странице используя синтаксис async / await.

// добавьте кнопку для обновление факта и кошки

const btnUpdate = document.getElementById("btn-update");
const content = document.querySelector('#content')

async function fetchCatImg() {
  const res = await fetch(
    "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
  );
  const data = await res.json();
  const catImg = document.createElement("img");
  catImg.src = data[0].url;
  catImg.classList.add("cat-img");
  content.append(catImg);
  console.log(catImg);
  console.log(data);
}

fetchCatImg();

const getCatFact = async () => {
  const res = await fetch("https://catfact.ninja/fact");
  const data = await res.json();
  console.log(data);
  const p = document.createElement("p");
  p.textContent = data.fact;
  content.append(p);
};

getCatFact();

btnUpdate.addEventListener("click", () => {
  // этот цикл чистит контейнер от результатов предыдущих вызовов. цикл будет удалять дочерние элементы пока их не останется
  while (content.firstChild) {
    content.removeChild(content.firstChild)
  }
  // догружаем новые данные в пустом контейнере
  fetchCatImg();
  getCatFact();
});