// Object Destructuring
// const person = {
//   name: "Chinmay",
//   age: 25,
//   location: {
//     city: "Hyderabad",
//     temp: 23
//   }
// };

// const { name: firstName = `Anonymous`, age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self Published" } = book.publisher;

// console.log(`${publisherName} `);

// const address = ["207 Prasanth Hills", "Hyderabad", "Telangana", "500032"];

// const [, city, state] = address;
// console.log(`You are in ${city},${state}`);

const item = ["Coffee(hot)", "200", "250", "275"];

const [coffeeType, , mediumPrice] = item;

console.log(`A medium ${coffeeType} costs ${mediumPrice}`);
