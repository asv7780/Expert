let btn = document.getElementById("play");

function transform() {
    /*
    ваша программа
    по возможности разбейте на функции
    */
    /*1. С помощью функции splice необходимо вырезать 6-й элемент массива. В результате ваш массив должен стать короче на один элемент.*/

    data.splice(5, 1);

    /*2. Используйте функцию forEach. Внутри цикла создайте новый массив объектов. В процессе создания нового массива объектов, избавьтесь от ключа id.То есть в вашем новом массиве не должно быть id в каждом конкретном объекте.*/

    let newArr = [];
    data.forEach(function (item) {
        newArr.push({
            url: item.url,
            name: item.name,
            params: item.params,
            description: item.description,
            date: item.date
        })
    });

    /*3 По новому массиву объектов, полученному с помощью функции forEach пройдитесь методом map()
     4 На каждой итерации цикла мы получаем один объект из массива объектов. Берем этот объект и преобразоваем его поля по следующим правилам.
     5. Для поля Name: с помощью функций работы со стрингами делаете первую букву большой, остальные маленькие (ДЖИП -> Джип)
     6. Для поля url: добавить перед ним «http://»
     7. Для поля Description: с помощью функций работы со стрингами делаете обрезание до 15 символов. После добавляем многоточие (…) Остальное отбрасываете.
     8. Для поля date: создать объект даты из заданных миллисекунд и потом отобразить в виде «2015/07/02 14:15» (moment.js)
     10. Для поля params: из значений ключей сформировать строку типа «true=>80». Для выполнения задания можно обращаться к полям объект params напрямую.
 То есть params.status и params.progress
 11. Создать новое поле isVisible. Переложить в это поле значение поля params.status.*/

    let mapedArr = newArr.map(item => {
        return {
            url: `http://${item.url}`,
            name: newName(item.name),
            params: `${item.params.status}=>${item.params.progress}`,
            isVisible: item.params.status,
            description: newDescription(item.description),
            date: moment(item.date).format('YYYY/MM/DD, HH:mm')
        };

        function newName(name) {
            name = name.toLowerCase();
            return `${name.substr(0, 1)/*or name[0]*/.toUpperCase()}${name.substr(1)}`;
        }

        function newDescription(description) {
            let longDescription = description.substring(16);
            return (description.length >= 15) ? description.replace(longDescription, "...") : description;

        }
    });

    /*12. После всех преобразований функция map вернет вам новый массив. Теперь с помощью функции filter вам необходимо выбрать только те элементы у которых isVisible == true. Пример работы функции filter есть в презентации.*/

    let result = mapedArr.filter(item => item.isVisible === true);
    /*or (item => item.isVisible) */

    /*13. Полученный результат печатаем в консоль.
    Для печати используем отдельную функцию как в прошлых заданиях. То есть вынесете console.log в отдельную функцию.*/

    function printResult(array) {
        console.log(array);
    }

    printResult(result);


    /*14. Пример результата (количество элементов в результате должно быть не два а сколько укажете в переменной):
    */

    btn.addEventListener("click", transform)
}

transform();


