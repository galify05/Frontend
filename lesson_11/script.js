const arr = [];
const numbers = [4, 8, 15, 16, 23, 42];
const fruits = ["apple", "orange", "kiwi", "banana"];

const arr1 = [1, "apple", undefined, true]; // разные типы в массивах допустимы, но не рекомендуется
console.log(arr1);

let kiwi = fruits[2];

let secret = fruits[10];
console.log(secret);

// for loop - цикл

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i], "под номером", i);
}

let fruitsLength = fruits.length; //длина массива fruits

// while - цикл (до тех пор /пока)
// let i = 0;
// while (i < 6) {
//     console.log(i, " - раз");
//     i++;
// }

// if else условный оператор
let isStudent = !true;

if (isStudent) {
    console.log("похоже, что вы студент");
} else {
    console.log("ты нубас😜");
}

// Добавление и удаление эдементов

const animals = ["shark", "panda", "tiger", "otter"];
const snake = "snake";

// push() - метод добавления элемента в конец массива мут
animals.push(snake); // если это положить в перемнную, то получу длину массива
console.log(animals);

//pop() - удаляет с конца мут
// animals.pop();
// animals.pop();
const returnedValue = animals.pop();
console.log(returnedValue);
console.log(animals);

// unshift - добавления элемента в начало массива мут

returnedValue3 = animals.unshift("panda");
console.log(animals);
console.log(returnedValue3);

// shift - метод удаления из начала массива мут

returneedValue4 = animals.shift();
console.log(animals);
console.log(returneedValue4);

// spread syntax - спред оператор (...)
// удобный способ сделать копию массива
const newAnimals = [...animals]; //копия только элементов
console.log(newAnimals);

const newAnimals1 = [animals, fruits]; // массив в массиве
console.log(newAnimals1);

const mixedArr = [...animals, ...fruits];
console.log(mixedArr);

const newAnimals2 = ["fox", ...animals, "🐱‍🐉"];
console.log(newAnimals2);

const num1 = [1, 2, 3];
const num2 = [1, 2, 3];
const isTrue = num1 === num2;
console.log(isTrue);

let copy = structuredClone(mixedArr);

// objects

const person1 = {
    name: "Ron",
    lastname: "Weasley",
    age: 40,
    isAdult: true,
    isMarried: false,
    siblings: ["Jinny", "Fred", "Jeorge"],
};

const person2 = {
    name: "Jinny",
    lastname: "Weasley",
    age: 35,
    isAdult: true,
    isMarried: true,
    siblings: ["Ron", "Fred", "Jeorge"],
};

const family = [person1, person2];
console.log(family);

console.log(person2.name, person2.lastname);

const personInfo2 =
    person2.name +
    " " +
    person2.lastname +
    " is sister of  " +
    person1.name +
    " " +
    person1.lastname;
console.log(personInfo2);

const person1Info = `${person1.name} ${person1.lastname} is brother of ${person2.name} ${person2.lastname}`;

console.log(person1Info);

for (let i = 0; i < family.length; i++) {
    console.log(`${family[i].name} is ${family[i].age}!`);
}
///////////////////////////////////////////
const variable = "hasWife";
console.log("1111111111111111111111111111111111111111111111111111");

const person3 = {
    name: "Bill",
    lastname: "Weasley",
    age: 40,
    isAdult: true,
    [variable]: true,
    "brothers and sisters": ["Ron", "Fred", "George", "Jinny"],
};

console.log(person3);
// console.log(person3);

//деструктуризация

const { name, lastname, age, siblings } = person1;

console.log(name);
console.log(siblings);
console.log(age);

////////////////////////////////////
console.log();
console.log();
console.log();
////////////////////////////////////

family.push(person3);
// console.log(family);

const [, , bill] = family;
console.log(bill.name);
