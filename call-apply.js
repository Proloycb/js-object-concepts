const kibria = {
    id: 101,
    name: 'rj kibria',
    major: 'mathematics',
    money: 5000,
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

const heroSalam = {
    id: 103,
    name: 'Hero Salam',
    money: 9000,
    major: 'mathematics'
}

// kibria.treatDey.call(heroBalam, 500, 50, 50);
// kibria.treatDey.call(heroBalam, 300, 50, 30);

kibria.treatDey.apply(heroSalam, [1500, 100, 150]);
kibria.treatDey.apply(heroSalam, [1000, 100, 100]);
