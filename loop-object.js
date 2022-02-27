const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

/*
1. for(let i= 0; i<= 10; i++){}
2. for (const num of numbers){}// array
3. for(const prop in bottle){}// object
*/
for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys){
    // console.log(prop, bottle[prop]);
}
 // advanced
 const entries = Object.entries(bottle);
//  console.log(entries);
 for(const [key, value] of Object.entries(bottle)){
     console.log(key, value);
 }
