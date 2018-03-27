(function () {
    let btn = document.getElementById("play"),

        firstGroup = document.querySelector('.first-group'),
        secondGroup = document.querySelector('.second-group'),
        thirdGroup = document.querySelector('.third-group'),

        firstBlock = document.querySelector('#first-line'),
        secondBlock = document.querySelector('#second-line'),
        thirdBlock = document.querySelector('#third-line'),

        typeSelector = document.querySelector('#type-selector'),
        numberSelector = document.querySelector('#line-selector');


    let arrOfGroups = [firstGroup, secondGroup, thirdGroup];

    let arrOfBlocks = [firstBlock, secondBlock, thirdBlock];

    let newUrl = url => {
        url = url.trim();
        return (url.indexOf('http://') !== 0) ? `http://${url}` : url;
    };


    let newName = name => {
        name = name.trim();
        name = name.toLowerCase();
        return `${name[0].toUpperCase()}${name.substr(1)}`;
    };

    let newDescription = description => {
        return (description.length >= 15) ? `${description.substring(0, 15)}...` : description;
    };

    let newDate = date => {
        date = parseInt(date);
        return (Number.isNaN(date) === false) ? moment(date).format("YYYY/MM/DD HH:mm") : moment().format("YYYY/MM/DD" + " HH:mm");
    };


    const replacer = item => {
        let template = '<div class="col-sm-3 col-xs-6">\
                                    <img src="$url" alt="$name" class="img-thumbnail">\
                                            <div class="info-wrapper">\
                                            <div class="text-muted">$name</div>\
                                            <div class="text-muted top-padding">$description</div>\
                                            <div class="text-muted">$date</div>\
                                        </div>\
                                    </div>';
        return template
            .replace(/\$name/gi, newName(item.name))
            .replace("$url", newUrl(item.url))
            .replace("$description", newDescription(item.description))
            .replace("$date", newDate(item.date));
    };

    const templater = item => {
        return `<div class="col-sm-3 col-xs-6">\
                    <img src="${newUrl(item.url)}" alt="${newName(item.name)}" class="img-thumbnail">\
                    <div class="info-wrapper">\
                        <div class="text-muted">${newName(item.name)}</div>\
                        <div class="text-muted top-padding">${newDescription(item.description)}</div>\
                        <div class="text-muted">${newDate(item.date)}</div>\
                    </div>\
                </div>`;
    };

    const creator = item => {

        let nameDiv = document.createElement("div");
        nameDiv.classList.add("text-muted");
        let nameText = document.createTextNode(newName(item.name));
        nameDiv.appendChild(nameText);
        let descDiv = document.createElement("div");
        descDiv.classList.add("text-muted", "top-padding");
        let descText = document.createTextNode(newDescription(item.description));
        descDiv.appendChild(descText);
        let dateDiv = document.createElement("div");
        dateDiv.classList.add("text-muted");
        let dateText = document.createTextNode(newDate(item.date));
        dateDiv.appendChild(dateText);
        let wrapper = document.createElement("div");
        wrapper.classList.add("info-wrapper");
        wrapper.appendChild(nameDiv);
        wrapper.appendChild(descDiv);
        wrapper.appendChild(dateDiv);
        let img = document.createElement("img");
        img.src = newUrl(item.url);
        img.alt = newName(item.name);
        img.classList.add("img-thumbnail");
        let mainDiv = document.createElement("div");
        mainDiv.classList.add("col-sm-3", "col-xs-6");
        mainDiv.appendChild(img);
        mainDiv.appendChild(wrapper);


        return mainDiv;
    };

    const arrOfMethods = [replacer, templater, creator];

    const getIterationWithResult = (count, arr, template) => {
        let result = '';
        let resultObj = document.createElement('div');

        for (let i = 0; i < count; i++) {
            let res = template(arr[i]);
            if (typeof res === 'string') {
                result += res;
            } else resultObj.appendChild(res);
        }
        return result || resultObj;
    };

    const getNumberOfImages = arr => {
        let count = numberSelector.value;
        return (count === '1') ? 3 : (count === '2') ? 6 : arr.length;
    };

    const buildGallery = (count, value, arr) => {
        let numberOfImages = getNumberOfImages(arr);
        return getIterationWithResult(numberOfImages, arr, arrOfMethods[value]);
    };

    const showBlock = value => {
        for (let i = 0; i < arrOfGroups.length; i++) {
            if (i === value) {
                arrOfGroups[i].classList.remove("hide");
                arrOfGroups[i].classList.add('show');
            } else {
                arrOfGroups[i].classList.add("hide");
                arrOfGroups[i].classList.remove('show');
            }
        }
    };

    const insertHtmlToDOM = (html, value) => {
        if (typeof html === 'string') {
            arrOfBlocks[value].innerHTML = html;
        } else {
            arrOfBlocks[value].innerHTML = '';
            arrOfBlocks[value].appendChild(html);
        }
    };

    function init() {
        let value = typeSelector.value - 1;
        let count = numberSelector.value;

        let htmlData = buildGallery(count, value, data);
        showBlock(value);
        insertHtmlToDOM(htmlData, value);
    }

    btn.addEventListener("click", init);
})();


// (function () {
//
//     let btn = document.getElementById("play"),
//         firstBlock = document.querySelector('#first-line'),
//         secondBlock = document.querySelector('#second-line'),
//         thirdBlock = document.querySelector('#third-line');
//
//     let newArr = data.map(item => {
//         return {
//             url: newUrl(item.url),
//             name: newName(item.name),
//             description: newDescription(item.description),
//             date: newDate(item.date)
//         }
//
//     });
//
//     function newUrl(url) {
//         url = url.trim();
//         return (url.indexOf('http://') !== 0) ? `http://${url}` : url;
//     }
//
//
//     function newName(name) {
//         name = name.trim();
//         name = name.toLowerCase();
//         return `${name[0].toUpperCase()}${name.substr(1)}`;
//     }
//
//     function newDescription(description) {
//         return (description.length >= 15) ? `${description.substring(0, 15)}...` : description;
//     }
//
//     function newDate(date) {
//         date = parseInt(date);
//         return (Number.isNaN(date) === false) ? moment(date).format("YYYY/MM/DD HH:mm") : moment().format("YYYY/MM/DD" + " HH:mm");
//     }
//
//
//     let replacer = () => {
//         let template = '';
//         let initialItemTemplate = '<div class="col-sm-3 col-xs-6">\
//     <img src="$url" alt="$name" class="img-thumbnail">\
//     <div class="info-wrapper">\
//     <div class="text-muted">$name</div>\
//     <div class="text-muted top-padding">$description</div>\
//     <div class="text-muted">$date</div>\
//     </div>\
//     </div>';
//         let finalTemplate;
//         finalTemplate = initialItemTemplate;
//         newArr.forEach(item => {
//             if (item === undefined || item.length === 0) return;
//             template += finalTemplate
//                 .replace(/\$name/gi, item.name)
//                 .replace("$url", newUrl(item.url))
//                 .replace("$description", newDescription(item.description))
//                 .replace("$date", newDate(item.date));
//         });
//
//         return template;
//     };
//
//
//     let templater = () => {
//         let template = '';
//         newArr.forEach(item => {
//             if (item === undefined || item.length === 0) return;
//             template += `<div class="col-sm-3 col-xs-6">\
//             <img src="${item.url}" alt="${item.name}" class="img-thumbnail">\
//             <div class="info-wrapper">\
//                 <div class="text-muted">${item.name}</div>\
//                 <div class="text-muted top-padding">${item.description}</div>\
//                 <div class="text-muted">${item.date}</div>\
//             </div>\
//             </div>`;
//         });
//
//         return template;
//     };
//
//
//     let creator = () => {
//         let divs = [];
//         newArr.forEach(item => {
//
//             let nameDiv = document.createElement("div");
//             nameDiv.classList.add("text-muted");
//             let nameText = document.createTextNode(item.name);
//             nameDiv.appendChild(nameText);
//             let descDiv = document.createElement("div");
//             descDiv.classList.add("text-muted", "top-padding");
//             let descText = document.createTextNode(item.description);
//             descDiv.appendChild(descText);
//             let dateDiv = document.createElement("div");
//             dateDiv.classList.add("text-muted");
//             let dateText = document.createTextNode(item.date);
//             dateDiv.appendChild(dateText);
//             let wrapper = document.createElement("div");
//             wrapper.classList.add("info-wrapper");
//             wrapper.appendChild(nameDiv);
//             wrapper.appendChild(descDiv);
//             wrapper.appendChild(dateDiv);
//             let img = document.createElement("img");
//             img.src = item.url;
//             img.alt = item.name;
//             img.classList.add("img-thumbnail");
//             let mainDiv = document.createElement("div");
//             mainDiv.classList.add("col-sm-3", "col-xs-6");
//             mainDiv.appendChild(img);
//             mainDiv.appendChild(wrapper);
//
//             divs.push(mainDiv);
//         });
//         return divs;
//     };
//
//
//     let hideAll = () => {
//         let groups = [
//             document.querySelector('.first-group'),
//             document.querySelector('.second-group'),
//             document.querySelector('.third-group')
//         ];
//         for (let item of groups) {
//             if (!item.classList.contains("hide")) {
//                 item.classList.add("hide");
//             }
//         }
//     };
//
//     let showBlock = (className) => {
//         document.querySelector(className).classList.toggle("hide");
//     };
//
//     let numberOfItems = displayType => {
//         switch (displayType) {
//             case 1:
//                 return 3;
//             case 2:
//                 return 6;
//             default:
//                 return newArr.length;
//         }
//     };
//
//
//     let printGallery = (buildType, template) => {
//         switch (buildType) {
//             case 1:
//                 firstBlock.innerHTML = template;
//                 showBlock('.first-group');
//                 break;
//             case 2:
//                 secondBlock.innerHTML = template;
//                 showBlock('.second-group');
//                 break;
//             case 3:
//                 thirdBlock.innerHTML = "";
//                 for (let block of template) {
//                     thirdBlock.appendChild(block);
//                 }
//                 showBlock('.third-group');
//                 break;
//         }
//     };
//
//     let builder = (buildType, numberOfItems) => {
//         if (numberOfItems > 0) {
//             let template;
//             switch (buildType) {
//                 case 1:
//                     template = replacer();
//                     break;
//                 case 2:
//                     template = templater();
//                     break;
//                 case 3:
//                     template = creator();
//             }
//             for (let i = 0; i < numberOfItems; i++) {
//                 template(newArr[i]);
//             }
//
//             return null;
//         }
//     };
//
//
//     function init() {
//
//         let buildType = parseInt(document.getElementById('type-selector').value);
//         let displayType = parseInt(document.getElementById('line-selector').value);
//
//         if (buildType === 0) return;
//         hideAll();
//
//         let template = builder(buildType, numberOfItems(displayType));
//
//         if (template) {
//             printGallery(buildType, template);
//         }
//
//     }
//     btn.addEventListener("click", init);
//
// })();
