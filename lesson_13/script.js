const transport = {
    speed: 140,
    color: "red",
    move: function () {
        console.log("I am moving");
    },
};

const prop = "speed";

console.log(transport.prop);
console.log(transport[prop]);

transport.move();

const car = {
    model: "Tesla Model 3",
    __proto__: transport,
};
console.log(car.model);
console.log(car.move());

const ship = new Object();
// const ship = {};
ship.year = 1996;

console.log(ship.year);

Object.setPrototypeOf(ship, transport);

ship.move();

//////////////////////////////////////////////////////
const JohnyDepp = {
    name: "Johny",
    surname: "Depp",
    age: 50,
    hobbies: ["cricket", "bowling", "fishing"],
    films: {
        year1999: ["Pirates1", "Edward"],
        year2003: ["Pirates2", "Pirates3"],
    },
    singin() {
        console.log("I am singin");
    },
};

JohnyDepp.singin();

const RikkiMartinConcer24051998 = {
    city: "Berlin",
    date: "1998-05-25 14:00",
    tickets: 8000,
    songs: ["La la", "Da vida Loca"],
};

console.log(JohnyDepp.name);
console.log(JohnyDepp["name"]);

JohnyDepp.weight = 70;
console.log(JohnyDepp);


delete JohnyDepp.age;

console.log(JohnyDepp);

const ifJohnyHas = "age" in JohnyDepp;
console.log(ifJohnyHas);


