'use strict';

var galleryService = (function () {
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

    let fromAtoZ = (a, b) => {
        return a.name > b.name ? 1 : -1;
    };

    let fromZtoA = (a, b) => {
        return a.name < b.name ? 1 : -1;
    };

    let fromNew = (a, b) => {
        return a.date > b.date ? 1 : -1;
    };

    let fromOld = (a, b) => {
        return a.date < b.date ? 1 : -1;
    };


    return {

        newUrl: newUrl,
        newName: newName,
        newDescription: newDescription,
        newDate: newDate,
        fromAtoZ: fromAtoZ,
        fromZtoA: fromZtoA,
        fromNew: fromNew,
        fromOld: fromOld
    }
}());


