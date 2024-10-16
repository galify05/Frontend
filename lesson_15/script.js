//  Задание. У нас есть разметка для To-Do листа (списка дел). Нужно запрограммировать ему функциональность. Минимальный набор:
// 1. При нажатии на кнопку “Создать” добавляется новое задание.
// 2. При нажитии на дело - оно меняет свой статус с выполенного и наоборот с соотсветсвующим изменением стилизации (примеры дел есть в разметке).
// 3. Кнопки “Все“, “Выполенные” и “Невыполенные” фильтруют задачи чтобы отображались соответвенно все, выполенные или не выполенные.

const allBtn = document.querySelector("#all"); // нашли кнопку Все
const completedBtn = document.querySelector("#completed"); // нашли кнопку  Выполненные
const uncompletedBtn = document.querySelector("#uncompleted"); // нашли кнопку  НЕвыполненые
const ul = document.querySelector(".list"); // нашли ul
const addBtn = document.querySelector("#btn"); // находим кнопку создания task
const input = document.querySelector(".task-input"); // находим поле ввода
const array = [];

// создаем элемент в массиве он же список
addBtn.addEventListener("click", addTask);
function addTask() {
    array.push({ task: input.value, isActive: false });
    let li = document.createElement("li");
    li.innerText = input.value;
    li.classList.add("list-item");
    li.addEventListener("click", () => {
        li.classList.toggle("list-item_done")});
    ul.append(li);
    input.value = "";} // создаем элемент в массиве он же список

// console.log(array.filter( element => element.isActive));
