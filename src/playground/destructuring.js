// Object Destructuring

// const person = {
//   name: 'Tyler',
//   age: 44,
//   location: {
//     city: 'Courtenay',
//     temp: 28
//   }
// };

// const {name = 'Anonymous', age, location} = person;
// console.log(`${name} is ${age}.`);

// const {city, temp} = location;

// console.log(`It's ${temp} in ${city}`);

// const book = {
//   title: 'Ego is the Enemy', 
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


// Array Destructuring
const address = ['5607 Sitka Street', 'Comox', 'BC', 'h0h0h0'];

const [, city, prov = 'BC'] = address;  // Skip street, keep city, prov and skip postal

console.log(`You are in ${city}, ${prov}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [coffee, small, medium, large] = item;

console.log(`A medium ${coffee} costs ${medium}`);