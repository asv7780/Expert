"use strict";

//TASKS
//main #1

//Создать главную самозапускающуюся функцию run() в которой будет выполняться основной код (цикл)
let total = 0,
    result = '',
    output = document.getElementById("result");

(function run() {
    let first,
        second;

    for (let i = 1; i <= 15; i++) {
        if (i === 8 || i === 13) {
            continue;
        }

//Также эта функция должна содержать в себе вызовы всех остальных функций:
        first = getRndNumber();
        second = getRndNumber();
        setResult(`Первая кость: ${first} Вторая кость: ${second}`);
        isNumbersEqual(first, second);
        isBigDifference(first, second);
        getTotal(first, second);
    }

    printResult();
}());


// Сделать функцию для получения случайных чисел (getRndNumber).Значение каждой переменной, в которую мы записываем, какая выпала кость получать с помощью вызова этой функции

function getRndNumber() {
    return Math.floor((Math.random() * 6) + 1);
}


// Сделать одну функцию которая будет склеивать все строки в одну (setResult). Она должна принимать только один аргумент. Строку текста, которую надо склеить. (если вы выводите данные не только в div с id result, а возможно еще в какой то другой div, тогда функция должна принимать 2 аргумента: id и Строку)

function setResult(resultText) {
    result += `${resultText}<br>`;
}

// Сделать функцию для определения совпадений. (isNumbersEqual). Она должна содержать в себе проверку на совпадение и внутри себя вызывать функцию для сохранения данных в общую строку (setResult).

function isNumbersEqual(first, second) {
    if (first === second) {
        setResult(`Выпал дубль. Число:${first}`);
    }
}

// Сделать функцию для определения разницы. (isBigDifference). Она должна содержать в себе соответствующую проверку и внутри себя вызывать функцию для сохранения данных в общую строку (setResult).

function isBigDifference(first, second) {
    if ((first < 3 && second > 4) || (second < 3 && first > 4)) {
        setResult(`Большой разброс между костями. Разница составляет: ${Math.abs(second - first)}`);
    }
}

// Сделать функцию для вычисления результата total. Функция должна вычислять результат и сохранять его в переменную total.

function getTotal(first, second) {
    total += first + second;
}

// Сделать функцию, которая напечатает полученные с помощью функции setResult данные в HTML (printResult).

function printResult() {
    setResult((total > 100) ? `Победа! Вы набрали ${total} очков!` : `Вы проиграли, у вас ${total} очков!`);
    output.innerHTML = result;
}

