const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

const newArray = starWarsHeroes.map((element) => {
    const result= {};
    result.name =element.name;
    result.isJedi = element.isJedi;
    return result;
})

console.log(newArray);

const youngJedi = starWarsHeroes.filter((newJedi) => newJedi.age < 40 && newJedi.isJedi === true);
console.log("Младше 40: ");

console.log(youngJedi);

const agesJedi = starWarsHeroes.reduce((acc, current) => acc + current.age, 0);
console.log("Возраст всех джедаев: " + agesJedi);

const agesJedi1 = starWarsHeroes.reduce(
    (acc, current) => acc + current.age,
    10
);
console.log("Возраст всех джедаев: " + agesJedi1);

const modArray = [...starWarsHeroes];
modArray[0] = { name: "Darth Vader", isJedi: false, age: 50 };
console.log(modArray);



 // if else
 const modArray1  = (jedi) => {
    if(jedi.name === "Anakin Skywalker") {

        return 
    } else return false
}
