let debet = [
    {name: 'ЗП', summ: 200, data: '02.12.21'},
    {name: 'Халтура', summ: 1000, data: '04.12.21'},
    {name: 'Лототрон', summ: 10000, data: '08.12.21'},
    {name: 'Казино', summ: 13000, data: '10.12.21'},
    {name: 'Подарок', summ: 5000, data: '12.12.21'},
    {name: 'Нашел', summ: 500, data: '14.12.21'},
];

let credit = [
    {name: 'Продукты', summ: 1000, data: '02.12.21'},
    {name: 'Шопинг', summ: 10000, data: '04.12.21'},
    {name: 'Кино', summ: 500, data: '08.12.21'},
    {name: 'Кафе', summ: 1500, data: '10.12.21'},
    {name: 'Авто', summ: 4000, data: '12.12.21'},
    {name: 'Спорт товары', summ: 2000, data: '14.12.21'},
]



for (let key in debet, credit) {
    console.log(`${debet[key].data}`);
    console.log('прихрд с: ');
    console.log(`${debet[key].name}: ${debet[key].summ}грн.`);
    console.log('Расход');
    console.log(`${credit[key].name}: ${credit[key].summ}грн.`);
    //console.log(student[key].value);
}


/*if (debet) {
    console.log();
}


let income = chekOrgIncome('Халтура');
if (income) {
    console.log(`${income.data}`);
    console.log('Приход:');
    console.log(`${income.name},${income.summ}грн.`);
}

let expence = chekOrgExpence('АТБ');
if (expence) {
    console.log(`${expence.data}`);
    console.log('Расход:');
    console.log(`${expence.name},${expence.summ}грн.`);
}







function chekOrgIncome(name) {
    for (let i = 0; i < debet.length; i++) {
        let income = debet[i];
        return income;
    }
}
function chekOrgExpence(name) {
    for (let i = 0; i < credit.length; i++) {
        let expence = credit[i];
        
        return expence;
    }
}*/

/*
02.12.21
Приход
ЗП: 200
Расход:
АТБ: 200
Кино: 500

*/