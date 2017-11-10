(function() {

    "use strict";

    var itemsArr = [
        {
            order: 1,
            flag: 'ru',
            sum: 5321,
            account: 123456000
        },
        {
            order: 3,
            flag: 'spa',
            sum: 1111,
            account: 111456000
        },
        {
            order: 2,
            flag: 'chi',
            sum: 2221,
            account: 223456000
        },
        {
            order: 4,
            flag: 'ru',
            sum: 3331,
            account: 443456000
        },
        {
            order: 5,
            flag: 'usa',
            sum: 4441,
            account: 333456000
        },
        {
            order: 6,
            flag: 'ukr',
            sum: 6661,
            account: 553456000
        }
    ];

    var e = e || window.event;
    var sortUpArr = document.querySelectorAll('.sort-up');
    var sortDownArr = document.querySelectorAll('.sort-down');

    if (localStorage.getItem("itemsArr") === null) {
        localStorage.setItem("itemsArr", JSON.stringify(itemsArr));
    } else {
        itemsArr = JSON.parse(localStorage.getItem("itemsArr"));
    }


    function drawArr(target) {

        for (var i = 0; i < itemsArr.length; i++) { 

            var item = 

            '<li class="table__item">' +

                '<div class="cell-left">' + 
                    '<span class="cell-number">' + itemsArr[i].order + 
                    '</span>' +
                '</div>' +

                '<div class="cell-right">' +
                    '<span class="cell-sum">$ ' + itemsArr[i].sum +
                    '</span>' +
                     '<span class="cell-account">' + itemsArr[i].account +
                    '</span>' +
                    '<span class="cell-country">' + itemsArr[i].flag + 
                    '</span>' +
                '</div>' +

            '</li>';

            document.getElementById(target).innerHTML += item;

        }
    }

    function clearArr(target) {
        document.getElementById(target).innerHTML = "";
    }

    function sortBy(field, reverse) {

        var key = function(x) {
            return x[field];
        };

        reverse = !reverse ? 1 : -1;

        return function (a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        };
        
    }

    function redrawArr(e, reverse) {
        switch(e.target.parentNode.className) {

            case 'cell-number': 
                itemsArr.sort(sortBy('order', reverse));
                break;

            case 'cell-sum': 
                itemsArr.sort(sortBy('sum', reverse));
                break;

            case 'cell-account': 
                itemsArr.sort(sortBy('account', reverse));
                break;

            case 'cell-country': 
                itemsArr.sort(sortBy('flag', reverse));
                break;

        }

        clearArr('tournament-list');
        drawArr('tournament-list');
        localStorage.setItem("itemsArr", JSON.stringify(itemsArr));
       
    }

    function getUpDownArrows() {

        for (var i = 0; i < sortUpArr.length; i++) {

            sortUpArr[i].addEventListener('click', function(e) {
                redrawArr(e, false);

            });

        }

        for (var j = 0; j < sortDownArr.length; j++) {

            sortDownArr[j].addEventListener('click', function(e) {
                redrawArr(e, true);
            });

        }
    }

    document.addEventListener("DOMContentLoaded", function() {

        drawArr('tournament-list');
        getUpDownArrows();


    });

})();