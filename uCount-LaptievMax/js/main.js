let users = ['Vasya', 'Petya', 'Grigoriy', 'Stepan', 'Ivan', 'Vasya', 'Stepan'];
let count = 0;

console.log(chekNames('Dima'));

function chekNames (uNames) {
    for (let i = 0; i < users.length; i++) {
        if (users[i] === uNames) {
            count ++;
        }
    }
    if (count === 1) {
        console.log(`совпадений: `);
    }else {
        console.log(`совпадений: ${count}`);
    }
    return count;
}