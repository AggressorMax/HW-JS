let student = {
    name: {rus: 'имя', value: 'Vasya'}, 
    age: {rus: 'возраст', value: 15},
    phone: {rus: 'тел.', value: 0992223322},
    avgMark: {rus: 'ср. балл', value: 12},
    rate: {rus: 'рейтинг', value: 123}  
};

console.log(student);

for (let key in student) {
    console.log(key);
    console.log(student[key].rus);
    console.log(student[key].value);
}

