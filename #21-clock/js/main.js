'use strict';
(function () {

    let hr = document.querySelector('.hours');
    let min = document.querySelector('.minutes');
    let sec = document.querySelector('.seconds');
    let cont = document.querySelectorAll('.today-date');
    let time = new Date();
    let finalDate = new Date("december,31,2018,23:59:59");


    let addZero = (i) => {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };

    let showData = () => {

        const months = ['Января', 'Февраля', 'Марта',
            'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
        const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];


        let thisMonth = months[time.getMonth()];
        let date = addZero(time.getDate());
        let day = days[time.getDay()];

        cont[0].innerHTML = `Сегодня ${day}, ${date} ${thisMonth}`;

    };


    let showTime = () => {
        time = new Date();
        const hours = addZero(time.getHours()),
            minutes = addZero(time.getMinutes()),
            seconds = addZero(time.getSeconds());

        hr.innerHTML = `${hours}`;
        min.innerHTML = `${minutes}`;
        sec.innerHTML = `${seconds}`;

        // or:
        // const time = `Текущее время: ${hours}:${minutes}:${seconds}`;
    };

    let daysLeftNewYear = () => {
        let msPerDay = 24 * 60 * 60 * 1000;
        let daysLeft = Math.round((finalDate.getTime() - time.getTime()) / msPerDay);
        let msg = "До 2019 года осталось";
        let wordOfDay = (number) => {
            let days = ['дней', 'дня', 'день'];
            if (number % 10 === 1) {
                return days[2]
            } else if (number % 10 === 2 || 3 || 4) {
                return days[0];
            } else {
                return days[1];
            }
        };
        cont[1].innerHTML = `${msg} ${daysLeft} ${wordOfDay(daysLeft)}`;
    };
    let init = () => {
        daysLeftNewYear();
        setInterval(showTime, 1000);
        showData();
    };

    init();
})();


