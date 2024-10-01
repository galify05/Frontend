console.log("hello, DOM!");
console.log(document);
console.dir(document.body);

// 1
let heading = document.getElementsByTagName("h2")[0];
console.log(heading);
heading.innerText = "Lesson 09. Dom intro👌";

// 2 class search
let ul = document.getElementsByClassName("method-list")[0];
// ul.style.listStyleType = 'none'
ul.className = "method-list";
console.log(ul);

// 3 id search

let desc = document.getElementById("desc");
desc.style.color = "grey";

desc.className = "desc";
console.log(desc);
// 4 через универсальный селектор .querySelector()

let descInfo = document.querySelector("#desc-info");
descInfo.className = "desc-info";
console.log(descInfo);

// **************************************************

let btnChangeHeading = document.querySelector("#btn-change-heading");
let btnHideList = document.querySelector("#btn-hide-list");
let btnCreateElement = document.querySelector("#btn-create-element");

btnChangeHeading.addEventListener("click", () => {
    heading.style.color = "red";
    heading.style.fontSize = "40px";
})

btnHideList.addEventListener("click", () => {
    ul.classList.toggle("hide");
})

btnCreateElement.addEventListener('click', () => {
    let newElement = document.createElement('p')
    newElement.innerText =
        'Кажется, я начинаю что-то понимать, но это не точно'
    document.body.append(newElement)
})

console.log(btnCreateElement)
