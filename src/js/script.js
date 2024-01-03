// Спрашиваем у пользователя, что он хочет сделать
var operation = prompt("Выберите действие (add, sub, mult, div):");

// Спрашиваем у пользователя первое число
var firstNumber = parseFloat(prompt("Введите первое число:"));

// Проверяем, является ли введенное значение числом
if (isNaN(firstNumber)) {
    alert("Пожалуйста, введите корректное число.");
} else {
    // Спрашиваем у пользователя второе число
    var secondNumber = parseFloat(prompt("Введите второе число:"));

    // Проверяем, является ли введенное значение числом
    if (isNaN(secondNumber)) {
        alert("Пожалуйста, введите корректное число.");
    } else {
        // Выполняем выбранную операцию и выводим результат
        var result;
        switch (operation) {
            case 'add':
                result = firstNumber + secondNumber;
                break;
            case 'sub':
                result = firstNumber - secondNumber;
                break;
            case 'mult':
                result = firstNumber * secondNumber;
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
                alert("Неверная операция. Выберите add, sub, mult или div.");
                break;
        }

        // Выводим результат операции
        if (result !== undefined) {
            alert(firstNumber + " " + operation + " " + secondNumber + " = " + result);
        }
    }
}
