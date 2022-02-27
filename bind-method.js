const kibria = {
    id: 101,
    name: 'rj kibria',
    major: 'mathematics',
    money: 5000,
    treatDey: function(expense){
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}
kibria.treatDey(200);
const heroBalam = {
    id: 102,
    name: 'Hero Balam',
    money: 6000,
    major: 'mathematics'
}
const heroBalamTreatDey = kibria.treatDey.bind(heroBalam);
heroBalamTreatDey(400);
heroBalamTreatDey(300);

const heroSalam = {
    id: 103,
    name: 'Hero Salam',
    money: 9000,
    major: 'mathematics'
}
const heroSalamTreatDey = kibria.treatDey.bind(heroSalam);
heroSalamTreatDey(1400);
kibria.treatDey(590);
