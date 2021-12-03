let students = [
    {name: 'Vasya', phone: '+380992223322'},
    {name: 'Kolya', phone: '+380992223333'},
    {name: 'Petya', phone: '+380992223344'},
];
// console.log(checkName('Vasya'));
// let student = checkName(prompt('Введите имя'));

let student = checkName('Vasya');
if (student) {
    console.log(`имя: ${student.name}, тел: ${student.phone}`);
} else {
    console.log('Студент с таким именем не найден');
}

function checkName(name) {
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        if (name === student.name) {
            return student;
        }
    }
    return false;
}
