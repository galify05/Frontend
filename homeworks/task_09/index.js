// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";
clonedBtn.innerText = "Я изменю тебя";
clonedBtn.className = "second-btn";
clonedBtn.style.backgroundColor = " #a78b71";
clonedBtn.style.color = "white";

btn.addEventListener("click", () => {
    // при нажатии на первую кнопку
    // работайте с clonedBtn
    // ваш код начинается здесь
    document.body.append(clonedBtn);
});
clonedBtn.addEventListener("click", () => {
    btn.style.backgroundColor = "#9c4a1a";
btn.innerText.color = "black"
  });

// здесь можете создать EventListener для второй кнопки
