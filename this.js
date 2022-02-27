
const kibria = {
    id: 101,
    name: 'rj kibria',
    major: 'mathematics',
    money: 5000,
    treatDeyArrow: () => {
        console.log(this);
    },
    treatDeyInside: function (){
        const myArrow = () => console.log(this);
        myArrow();
    },
    treatDey: function(expense, boksis, tax){
        this.money = this.money - expense - boksis - tax;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    name: 'Hero Balam',
    money: 6000,
    major: 'mathematics'
}

function add (){
    console.log(this);
}