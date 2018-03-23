// //Приклад(інструкція):


// (function(){
// let btn = document.getElementById("play"),
//     firstBlock = document.querySelector('#first-line'),
//     secondBlock = document.querySelector('#second-line'),
//     thirdBlock = document.querySelector('#third-line');
//
// let item = {
//     url: "http://desktopwallpapers.org.ua/mini/201507/40069.jpg",
//     name: "CHEVROLET",
//     description : "Lorem ipsum dolor sit amet",
//     date : "2015/01/25 14:15"
// };
//
// function init() {
//     // сначала снимаете значение с селектбокса,
//     // document.getElementById("").value
//     // определяете какой способ построения галлереи надо использовать
//     // запускаете необходимую логику
//
//     // код ниже дан для справки, вам нужно будет использовать тот вариан который вы выбрали в селектбоксе
//     // пример построения галлереи с помощю replace
//     var replaceItemTemplate = '<div class="col-sm-3 col-xs-6">\
//     <img src="$url" alt="$name" class="img-thumbnail">\
//     <div class="info-wrapper">\
//     <div class="text-muted">$name</div>\
//     <div class="text-muted top-padding">$description</div>\
//     <div class="text-muted">$date</div>\
//     </div>\
//     </div>';
//
//     let resultHTML = replaceItemTemplate
//         .replace(/\$name/gi, item.name)
//         .replace("$url", item.url)
//         .replace("$description", item.description)
//         .replace("$date", item.date);
//
//     firstBlock.innerHTML = resultHTML;
//
//     // один из примеров как прятать блоки
//     document.querySelector('.first-group').classList.add("show");
//     document.querySelector('.second-group').classList.add("hide");
//     document.querySelector('.third-group').classList.add("hide");
//
//     // пример построения галлереи с помощю шаблонных строк
//     let secondItemTemplate = `<div class="col-sm-3 col-xs-6">\
//     <img src="${item.url}" alt="${item.name}" class="img-thumbnail">\
//     <div class="info-wrapper">\
//         <div class="text-muted">${item.name}</div>\
//         <div class="text-muted top-padding">${item.description}</div>\
//         <div class="text-muted">${item.date}</div>\
//     </div>\
//     </div>`;
//     //secondBlock.innerHTML = secondItemTemplate;
// }
//
// btn.addEventListener("click", init);

// })()
//
(function () {

    let btn = document.getElementById("play"),
        firstBlock = document.querySelector('#first-line'),
        secondBlock = document.querySelector('#second-line'),
        thirdBlock = document.querySelector('#third-line');

    let newArr = data.map(item => {
        return {
            url: newUrl(item.url),
            name: newName(item.name),
            description: newDescription(item.description),
            date: newDate(item.date)
        }

    });

    function newUrl(url) {
        url = url.trim();
        return (url.indexOf('http://') !== 0) ? `http://${url}` : url;
    }


    function newName(name) {
        name = name.trim();
        name = name.toLowerCase();
        return `${name[0].toUpperCase()}${name.substr(1)}`;
    }

    function newDescription(description) {
        return (description.length >= 15) ? `${description.substring(0, 15)}...` : description;
    }

    function newDate(date) {
        date = parseInt(date);
        return (Number.isNaN(date) === false) ? moment(date).format("YYYY/MM/DD HH:mm") : moment().format("YYYY/MM/DD" + " HH:mm");
    }


    let replacer = () => {
        let template = '';
        let initialItemTemplate = '<div class="col-sm-3 col-xs-6">\
    <img src="$url" alt="$name" class="img-thumbnail">\
    <div class="info-wrapper">\
    <div class="text-muted">$name</div>\
    <div class="text-muted top-padding">$description</div>\
    <div class="text-muted">$date</div>\
    </div>\
    </div>';
        let finalTemplate;
        finalTemplate = initialItemTemplate;
        newArr.forEach(item => {
            if (item === undefined || item.length === 0) return;
            template += finalTemplate
                .replace(/\$name/gi, item.name)
                .replace("$url", newUrl(item.url))
                .replace("$description", newDescription(item.description))
                .replace("$date", newDate(item.date));
        });

        return template;
    };


    let templater = () => {
        let template = '';
        newArr.forEach(item => {
            if (item === undefined || item.length === 0) return;
            template += `<div class="col-sm-3 col-xs-6">\
            <img src="${item.url}" alt="${item.name}" class="img-thumbnail">\
            <div class="info-wrapper">\
                <div class="text-muted">${item.name}</div>\
                <div class="text-muted top-padding">${item.description}</div>\
                <div class="text-muted">${item.date}</div>\
            </div>\
            </div>`;
        });

        return template;
    };


    let creator = () => {
        let divs = [];
        newArr.forEach(item => {

            let nameDiv = document.createElement("div");
            nameDiv.classList.add("text-muted");
            let nameText = document.createTextNode(item.name);
            nameDiv.appendChild(nameText);
            let descDiv = document.createElement("div");
            descDiv.classList.add("text-muted", "top-padding");
            let descText = document.createTextNode(item.description);
            descDiv.appendChild(descText);
            let dateDiv = document.createElement("div");
            dateDiv.classList.add("text-muted");
            let dateText = document.createTextNode(item.date);
            dateDiv.appendChild(dateText);
            let wrapper = document.createElement("div");
            wrapper.classList.add("info-wrapper");
            wrapper.appendChild(nameDiv);
            wrapper.appendChild(descDiv);
            wrapper.appendChild(dateDiv);
            let img = document.createElement("img");
            img.src = item.url;
            img.alt = item.name;
            img.classList.add("img-thumbnail");
            let mainDiv = document.createElement("div");
            mainDiv.classList.add("col-sm-3", "col-xs-6");
            mainDiv.appendChild(img);
            mainDiv.appendChild(wrapper);

            divs.push(mainDiv);
        });
        return divs;
    };


    let hideAll = () => {
        let groups = [
            document.querySelector('.first-group'),
            document.querySelector('.second-group'),
            document.querySelector('.third-group')
        ];
        for (let item of groups) {
            if (!item.classList.contains("hide")) {
                item.classList.add("hide");
            }
        }
    };

    let showBlock = (className) => {
        document.querySelector(className).classList.toggle("hide");
    };

    let numberOfItems = displayType => {
        switch (displayType) {
            case 1:
                return 3;
            case 2:
                return 6;
            default:
                return newArr.length;
        }
    };


    let printGallery = (buildType, template) => {
        switch (buildType) {
            case 1:
                firstBlock.innerHTML = template;
                showBlock('.first-group');
                break;
            case 2:
                secondBlock.innerHTML = template;
                showBlock('.second-group');
                break;
            case 3:
                thirdBlock.innerHTML = "";
                for (let block of template) {
                    thirdBlock.appendChild(block);
                }
                showBlock('.third-group');
                break;
        }
    };

    let builder = (buildType, numberOfItems) => {
        if (numberOfItems > 0) {
            let template;
            switch (buildType) {
                case 1:
                    template = replacer();
                    break;
                case 2:
                    template = templater();
                    break;
                case 3:
                    template = creator();
            }
            for (let i = 0; i < numberOfItems; i++) {
                template(newArr[i]);
            }
            return null;
        }
    };


    function init() {

        let buildType = parseInt(document.getElementById('type-selector').value);
        let displayType = parseInt(document.getElementById('line-selector').value);

        if (buildType === 0) return;
        hideAll();

        let template = builder(buildType, numberOfItems(displayType));

        if (template) {
            printGallery(buildType, template);
        }
    }

    btn.addEventListener("click", init);

})();
