const bottle = {color: 'yellow', hold: 'water', price: 50, isCleaned: true};
// getting all properties names
const keys = Object.keys(bottle);
// console.log(keys);

// get all values
const values = Object.values(bottle);
// console.log(values);

// get key and value
const pairs = Object.entries(bottle);
// console.log(pairs);
// Object.seal(bottle);
Object.freeze(bottle);
bottle.price = 100;
bottle.hight = 10;
delete bottle.isCleaned;
console.log(bottle)