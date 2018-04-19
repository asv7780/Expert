'use strict';
(function () {

    let btn = document.getElementById("play"),
        gallery = document.querySelector('#gallery'),
        quantity = document.querySelector('#quantity'),
        sortingOption = document.querySelector('#sel1'),
        displayedData = [],
        hiddenData = data.slice();

    function initListeners() {
        btn.addEventListener("click", addFunctionalityToBtn);
        gallery.addEventListener("click", addFunctionalityToGallery);
        sortingOption.addEventListener("change", addFunctionalityToSortingOption);
        document.addEventListener("DOMContentLoaded", setSortingOptionFromLocalStorage);
    }


    function getGalleryItemHTML() {
        let result = "";
        for (let i = 0; i < displayedData.length; i++) {
            let template = `<div class="col-md-4" id="${i}">
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="${galleryService.newName(displayedData[i].name)}" 
                            src="${galleryService.newUrl(displayedData[i].url)}" data-holder-rendered="true" 
                            style="height: 225px; width: 100%; display: block;">
                        <div class="card-body">
                            <div class="text-muted">${galleryService.newName(displayedData[i].name)}</div>\
                            <p class="card-text">${galleryService.newDescription(displayedData[i].description)}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn btn-danger delete" data-toggle-id="${i}">Удалить</div>
                                <small class="text-muted">${galleryService.newDate(displayedData[i].date)}</small>
                            </div>
                        </div>
                    </div>
		        </div>
	            </div></div>`;
            result += template;
        }
        return result;
    }


    function renderResult(element, result) {
        element.innerHTML = result;
    }

    function fillDisplayedData() {
        if (hiddenData.length !== 0) {
            displayedData.push(hiddenData.pop());
        }
    }

    function btnDisabled() {
        if (displayedData.length === data.length) {
            btn.classList.add("disabled");
            return true;
        }
    }

    /*Александр, будет возможность обясните почему при switch case  не срабатывает .sort (стр.91, 94, 97)
     и при строгом равенстве option === 1(0, 2) - (стр.103,105,107)?*/
    function sortingArray() {
        let option = sortingOption.value;
        switch (option) {
            case "0":
                displayedData.sort(galleryService.fromAtoZ);
                break;
            case "1":
                displayedData.sort(galleryService.fromZtoA);
                break;
            case "2":
                displayedData.sort(galleryService.fromOld);
                break;
            default:
                displayedData.sort(galleryService.fromNew);
        }

        // if (option === "0") {
        //     displayedData.sort(fromAtoZ);
        // } else if (option === "1") {
        //     displayedData.sort(fromZtoA);
        // } else if (option === "2") {
        //     displayedData.sort(fromOld);
        // } else {
        //     displayedData.sort(fromNew);
        // }
    }

    function saveToLocalStorage() {
        localStorage.setItem("sortingOption", sortingOption.value);
    }

    function setSortingOptionFromLocalStorage() {
        sortingOption.value = localStorage.sortingOption;
    }

    function deletingItems(event) {
        let target = event.target,
            id = target.getAttribute("data-toggle-id");
        if (!id) return;
        hiddenData.push(displayedData[id]);
        displayedData.splice(id, 1);
        btn.classList.remove("disabled");
    }

    function buildGallery() {
        sortingArray();
        renderResult(gallery, getGalleryItemHTML());
        renderResult(quantity, displayedData.length);
        if (btnDisabled()) {
            $('#myModal').modal('show');
        }
    }

    function addFunctionalityToGallery(event) {
        deletingItems(event);
        buildGallery();

    }

    function addFunctionalityToBtn() {
        fillDisplayedData();
        buildGallery();
    }

    function addFunctionalityToSortingOption() {
        saveToLocalStorage();
        buildGallery();
    }

    function init() {
        initListeners();
        buildGallery();
    }

    init();
})();