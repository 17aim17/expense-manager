// Object Destructuring
// console.log('Destructuring');

// const person = {
//   name: 'Ash',
//   age: 19,
//   location: {
//     city: 'Sonipat',
//     temp: 21
//   }
// };

// const { name: fName = 'Anonymous', age } = person;

// console.log(`${fName} is ${age}.`);

// const { city, temp: temprature } = person.location;
// if (city && temprature) {
//   console.log(`its ${temprature} in ${city}.`);
// }

// Arrayy Destructuring
const address = [
  '1299 S Juniper Street',
  'Philadelphia',
  'Pennsylvania',
  '19147'
];

const [, city, state = 'New Yourk'] = address;

console.log(`Your are in ${city} ${state}.`);
