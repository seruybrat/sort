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
            order: 2,
            flag: 'spa',
            sum: 1111,
            account: 111456000
        },
        {
            order: 3,
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

    function drawArr() {

        var target = document.getElementById('tournament-list');

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
                    '<span class="cell-country flag-' + itemsArr[i].flag + 
                    '"></span>' +
                '</div>' +

            '</li>';

            target.innerHTML += item;

        }
    }

    document.addEventListener("DOMContentLoaded", function() {

        var numUp = document.getElementById('num');

        numUp.addEventListener('click', function() {

            var numArray = document.querySelectorAll('.cell-number');
            numArray[0].style.backgroundColor = "red";

            function sortNumber(a,b) {
                return a - b;
            }
        });


        drawArr();

    });

})();