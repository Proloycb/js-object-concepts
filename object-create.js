//1. using object literal
    const student = {name: 'Shakib Al Hasan', job: 'cricketer'};
    // console.log(student);

//2. using constructor
    const human = new Object();
    // console.log(human);

//3. create
    // const person = Object.create(null);
    const person = Object.create(student);
    // console.log(person.job);

//4. create object using class- syntactical sugar
    class People {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
const peop = new People('Kader', 13);
// console.log(peop);

// 5. using function
function Manus(name){
    this.name = name;
}
const man = new Manus('Protik');
console.log(man);
