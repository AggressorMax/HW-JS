let student = {
    name: 'Vasya', 
    age: 15,
    phone: 0992223322,
    avgMark: 12,
    rate: 123  
};

let keyRus = {
    name: 'Имя', 
    age: 'Возраст',
    phone: 'Тел.',
    avgMark: 'Ср. балл',
    rate: 'Рейтинг'  
};

console.log(student);

for (let key in student) {
    console.log(`${keyRus[key]}: ${student[key]}`);
}

