let user = ['Дима', 1981, 'Вася', 1995, 'Коля', 1993, 'Иван', 1970];
let year = 2021;
let avgAge = year - ( 1981 + 1995 + 1993 + 1970 ) / 4;
let age1 = year - user [1];
let age2 = year - user [3];
let age3 = year - user [5];
let age4 = year - user [7];
// Если 18 <= возраст <= 40 подходит
console.log('Имя: Дима, возраст: 40, подходит');
console.log('Имя: Дима, возраст: 51, не подходит');
console.log(`Средний возраст представленных кандидатов: ${avgAge}`);
//console.log(`Средний возраст представленных кандидатов: ${midUserAge}`);

console.log(`имя:${user [0]}`);
console.log(`г.Рож:${user [1]}`);
console.log(`возраст: ${age1}`);
if (age1 >=18, age1 <=40 ) {
    console.log(`подходит`);
}else{
    console.log(`не подходит`);
}

console.log(`имя:${user [2]}`);
console.log(`г.Рож:${user [3]}`);
console.log(`возраст: ${age2}`);
if (age2 >=18, age2 <=40 ) {
    console.log(`подходит`);
}else{
    console.log(`не подходит`);
}

console.log(`имя:${user [4]}`);
console.log(`г.Рож:${user [5]}`);
console.log(`возраст: ${age3}`);
if (age3 >=18, age3 <=40 ) {
    console.log(`подходит`);
}else{
    console.log(`не подходит`);
}

console.log(`имя:${user [6]}`);
console.log(`г.Рож:${user [7]}`);
console.log(`возраст: ${age4}`);
if (age4 >=18, age4 <=40 ) {
    console.log(`подходит`);
}else{
    console.log(`не подходит`);
}

