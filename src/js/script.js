'use strict';

const action = prompt('Что вы хотите сделать? Выберите: add, sub, mult, div');
const firstNumber = Number(prompt('Введите первое число'));
const secondNumber = Number(prompt('Введите второе число'));
const additionResult = Number(firstNumber + secondNumber);
const subtractionResult = Number(firstNumber - secondNumber);
const multiplicationResult = Number(firstNumber * secondNumber);
const divisionResult = Number(firstNumber / secondNumber);

switch (action) {
    case 'add':
        alert(firstNumber + ' + ' + secondNumber + ' = ' + additionResult);
        break;
    case 'sub':
        alert(firstNumber + ' - ' + secondNumber + ' = ' + subtractionResult);
        break;
    case 'mult':
        alert(firstNumber + ' * ' + secondNumber + ' = ' + multiplicationResult);
        break;
	case 'div':
                // Проверяем деление на 0
                if (secondNumber === 0) {
                    alert("На 0 делить нельзя.");
                } else {
                    result = firstNumber / secondNumber;
                }
                break;
    default:
        alert('Выберите правильное действие!');
        break;
}
