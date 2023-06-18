function getRandomNumber(digits) {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkAnswer(answer, number1, number2, operator) {
    let correctAnswer;
    switch (operator) {
        case 'add':
            correctAnswer = number1 + number2;
            break;
        case 'subtract':
            correctAnswer = number1 - number2;
            break;
        case 'multiply':
            correctAnswer = number1 * number2;
            break;
        
    }
    return answer === correctAnswer;
}

function operatorSymbol(operator) {
    switch (operator) {
        case 'add':
            return '+';
        case 'subtract':
            return '-';
        case 'multiply':
            return '*';

    }
   
}

document.getElementById('start').addEventListener('click', function () {
    const digit1 = parseInt(document.getElementById('digit1').value);
    const digit2 = parseInt(document.getElementById('digit2').value);
    const operator = document.getElementById('selectedOperator').value;

    const number1 = getRandomNumber(digit1);
    const number2 = getRandomNumber(digit2);

    document.getElementById('number1').textContent = number1;
    document.getElementById('number2').textContent = number2;
    document.getElementById('operator').textContent = operatorSymbol(operator);
    document.getElementById('options').style.display = 'none';
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
});

document.getElementById('calculate').addEventListener('click', function () {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;
    const answer = parseInt(document.getElementById('answer').value);

    if (isNaN(answer)) {
        alert('올바른 숫자를 입력해주세요.');
        return;
    }

    if (checkAnswer(answer, number1, number2, operator)) {
        alert('O');
    } else {
        alert('X');
    }

    document.getElementById('start').click();
});
document.getElementById('submit').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').textContent);
    const number2 = parseFloat(document.getElementById('number2').textContent);
    const operator = document.getElementById('selectedOperator').value; // 여기를 수정했습니다.
    const answer = parseFloat(document.getElementById('answer').value);

    if (isNaN(answer)) {
        alert('올바른 숫자를 입력해주세요.');
        return;
    }

    if (checkAnswer(answer, number1, number2, operator)) {
        document.getElementById('result').textContent = 'O';
        document.getElementById('result').classList.remove('X');
    } else {
        document.getElementById('result').textContent = 'X';
        document.getElementById('result').classList.add('X');
    }

    document.getElementById('submit').style.display = 'none';
    document.getElementById('next').style.display = 'inline-block';
});

document.getElementById('next').addEventListener('click', function () {
    document.getElementById('start').click();
    document.getElementById('submit').style.display = 'inline-block';
    document.getElementById('next').style.display = 'none';
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
});
