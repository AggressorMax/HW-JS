let dates = [
    '02.12.21',
    '04.12.21',
    '08.12.21',
    '10.12.21',
    '12.12.21',
    '14.12.21',
];
let debet = [
    {name: 'ЗП', summ: 200, date: '02.12.21'},
    {name: 'доп процент', summ: 500, date: '02.12.21'},
    {name: 'Халтура', summ: 1000, date: '04.12.21'},
    {name: 'доп процент', summ: 300, date: '04.12.21'},
    {name: 'Лототрон', summ: 10000, date: '08.12.21'},
    {name: 'доп процент', summ: 440, date: '08.12.21'},
    {name: 'Казино', summ: 13000, date: '10.12.21'},
    {name: 'доп процент', summ: 250, date: '10.12.21'},
    {name: 'Подарок', summ: 5000, date: '12.12.21'},
    {name: 'доп процент', summ: 564, date: '12.12.21'},
    {name: 'Нашел', summ: 500, date: '14.12.21'},
    {name: 'доп процент', summ: 0, date: '14.12.21'},
];


let credit = [
    {name: 'Продукты', summ: 1000, date: '02.12.21'},
    {name: 'проезд', summ: 16, date: '02.12.21'},
    {name: 'Шопинг', summ: 1500, date: '04.12.21'},
    {name: 'проезд', summ: 16, date: '04.12.21'},
    {name: 'Кино', summ: 500, date: '08.12.21'},
    {name: 'закуски', summ: 500, date: '08.12.21'},
    {name: 'проезд', summ: 16, date: '08.12.21'},
    {name: 'Кафе', summ: 1500, date: '10.12.21'},
    {name: 'проезд', summ: 16, date: '10.12.21'},
    {name: 'Авто', summ: 4000, date: '12.12.21'},
    {name: 'переобувка резины', summ: 1000, date: '12.12.21'},
    {name: 'проезд', summ: 16, date: '12.12.21'},
    {name: 'Спорт товары', summ: 2000, date: '14.12.21'},
    {name: 'проезд', summ: 16, date: '14.12.21'},
];

let bonus = debet.filter (function(item){
    return item.name === 'доп процент';
});
console.log(bonus);
let arr = credit.filter (function(item){
    return item.summ === 16;
});
console.log(arr);


for (let i = 0; i < dates.length; i++) {
    let currentDate = dates[i];
    console.log(`date - ${currentDate}`);
    console.log('Debet');
    for (let d = 0; d < debet.length; d++ ) {
        if (currentDate === debet[d].date) {
            console.log(`${debet[d].name}: ${debet[d].summ}`);
        }
    }
    console.log('Credit');
    for (let c = 0; c < credit.length; c++ ) {
        if (currentDate === credit[c].date) {
            console.log(`${credit[c].name}: ${credit[c].summ}`);
        }
    }
    console.log('**********');
}
