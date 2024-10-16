//task 1
const names = ["Мария", "Алексей", "Елена", "Дмитрий"];
const ages = [22, 31, 45, 53];

const marie = {
    name: "Мария",
    age: 22,
};

const alex = {
    name: "Алексей",
    age: 31,
};
const elena = {
    name: "Елена",
    age: 45,
};
const dima = {
    name: "Дмитрий",
    age: 53,
};

const arrr = [...names, ...ages];
console.log(arrr);

const arr = [marie, alex, elena, dima];
console.log(arr);
console.log();

//task 2
const mirArr = [];
let i = 0;

while (i < arr.length) {
    mirArr.unshift(arr[i]);
    i++;
}

console.log(mirArr);
console.log();

const mirArr2 = [];
for (let i = arr.length - 1; i >= 0; i--) {
    mirArr2.push(arr[i]);
}
console.log(mirArr2);
console.log();

// Task 3
const countries = [];
countries.push("Франция", "Германия", "Италия");
let rem = countries.pop();
countries.unshift(rem);
console.log(countries);
console.log();

// Task 4
const car = {
    brand: "Mazda",
    model: "RX-7",
    year: 1996,
    isElectric: false,
    getcarInfo: () => ` ${car.brand} ${car.model} ${car.year}`
};

const keys = Object.keys(car);
console.log(keys);

const values = Object.values(car);
console.log(values);

car.getCarinfo = ` ${car.brand} ${car.model} ${car.year}`;
console.log(car.getCarinfo);


 for (let key in car){
    console.log(`key: ${key}, value:${car[key]}`);
 }
 
