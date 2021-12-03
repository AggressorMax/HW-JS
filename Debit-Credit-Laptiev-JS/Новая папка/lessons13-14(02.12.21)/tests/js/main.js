let tests = [
    ['2+2=5?', false],
    ['2*2=4?', true],
    ['3*3=10?', false],
    ['5-2=1?', false],
    ['5*5=30?', false],
];

for (let i = 0; i < tests.length; i++) {
    let question = tests[i][0];
    let correctAnswer = tests[i][1];
    let userAnswer = confirm(question);

    if (userAnswer === correctAnswer) {
        alert('Правильно');
    } else {
        alert('Неправильно');
    }
}

