"use strict";

var btn = document.getElementById("play");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var result = document.getElementById("result");

function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
}


function runGame() {

    var num1 = getPlayerResult();
    var num2 = getPlayerResult();

// На экран вывести полученную текстовую строку для каждого из игроков.
    player1.innerHTML = getNameById(num1);
    player2.innerHTML = getNameById(num2);

    result.innerHTML = printResult(determineWinner(num1, num2));


}

// добавить функцию (getNameById) которая будет принимать это число и возвращать слово «камень», «ножницы», или «бумага», согласно словарю указанному выше.
function getNameById(num) {
    if (num === 1) {
        return "камень";
    } else if (num === 2) {
        return "ножницы";
    } else if (num === 3) {
        return "бумага";
    }
}

// Написать функцию (determineWinner), которая будет принимать два числа, предварительно полученные в функции getPlayerResult и принимать решение, кто из игроков выиграл. Результатом выполнения функции determineWinner должно быть число, номер игрока, который выиграл.  То есть эта функция должна возвращать номер игрока который выиграл


function determineWinner(num1, num2) {
    if (num1 === num2) {
        return 0;
    } else if ((num1 === 1 && num2 === 2) || (num1 === 2 && num2 === 3) || (num1 === 3 && num2 === 1)) {
        return 1;
    } else {
        return 2;
    }
}

// Функция printResult должна принять номер игрока, который выиграл и напечатать в div Id result текстовое сообщение типа: «выиграл первый игрок» номер игрока надо вывести словами.
function printResult(result) {
    if (result === 0) {
        return "ничья";
    } else if (result === 1) {
        return "Победил первый игрок";
    } else {
        return "Победил второй игрок";
    }
}

btn.addEventListener("click", runGame);



















































