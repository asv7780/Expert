"use strict";

var i,
    first,
    second,
    total = 0,
    result = '',
    output = document.getElementById("result");

for (i = 1; i <= 15; i++) {
    if (i === 8 || i === 13) {
        continue;
    }

    first = Math.floor((Math.random() * 6) + 1);
    second = Math.floor((Math.random() * 6) + 1);

    result += "Первая кость: " + first + " Вторая кость: " + second + " " + "<br>";

    if (first === second) {
        result += "Выпал дубль. Число: " + first + " " + "<br>";
    }

    if ((first < 3 && second > 4) || (second < 3 && first > 4)) {
        result += "Большой разброс между костями. Разница составляет:" + Math.abs(second - first) + " " + "<br>";
    }

    total += first + second;

}

result += ((total > 100) ? "Победа! Вы набрали " + total + " очков!" : "Вы проиграли, у вас " + total + " очков!");

output.innerHTML = result;

// TASKS
// Task-1

let j;
for (j = 1; j <= 7; j++) {
    console.log("Квадрат" + " " + j + " " + "=" + " " + Math.pow(j, 2));
}

// //
// Task-2

// #1
let k;
for (k = 1; k <= 15; k++) {
    if (k % 2 === 0) {
        console.log("Число " + k + "." + " Четное;");
    } else {
        console.log("Число " + k + "." + " Нечетное;");
    }
}


// #2
var l = 1;
while (l <= 15) {
    if (l % 2 === 0) {
        console.log("Число " + l + "." + " Четное;");
    } else {
        console.log("Число " + l + "." + " Нечетное;");
    }
    l++;
}

// #3
var p = 1;
do {
    if (p % 2 === 0) {
        console.log("Число " + p + "." + " Четное;");
    } else {
        console.log("Число " + p + "." + " Нечетное;");
    }
    p++;
} while (p <= 15);

// task-3

var n;
for (n = 100; n >= 0; n -= 10) {
    if (n === 90 || n === 70 || n === 30) {
        continue;
    }
    console.log("number: " + n);

}





