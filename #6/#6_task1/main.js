"use strict";
// task-1
(function (win) {
    var params = {states: {url: "/", template: "temlate.js"}
    }; // в этом месте необходимо было ";". честно не знаю почему, использовал подсказку))

    function setStates(params) {
        if (win && !win.params) {
            win.params = params;
        }
    }

    setStates();
    console.log(params.states.template);
})(window);


// // task-2
//
// // var a = 5;
// // console.log (a);
// //
// // var b = 5;
// // console.log (b);
// //
// // var c = 5;
// // console.log (c);
//
//
var a = 5,
    b = 5,
    c = 5;
console.log (a);
console.log (b);
console.log (c);

// var a = 10;
// console.log (a);
//
// var b = 20;
// console.log (b);
//
// var c = 30;
// console.log (c);
var d = 105,
    t = 205,
    y = 305;
console.log (d);
console.log (t);
console.log (y);

// // task-3

var someVar;
console.log (someVar);

someVar = "text of var";
console.log (someVar);

someVar = 555;
console.log (someVar);

someVar = true;
console.log (someVar);

someVar = null;
console.log (someVar);
console.log (typeof someVar);// object

// // task-4
//
let item = "JavaScript";
var item2 = "COURSES";
var result = item + " " + item2;
console.log (result);

// // task-5

var n = 1, x, z;
++n;
++n;
x = z = n++;
console.log (z);
console.log (x);

// // task-6
//
var num = 10;
console.log (num);
num = (num).toString();//or
num = String(num);//or
num = "" + 10;
console.log (num);
console.log (typeof num);

num = Boolean(num);
console.log (num);
num = +num;//or
num = Number(num); //or
num = Number(num) + 9;// 10))
console.log (num);

