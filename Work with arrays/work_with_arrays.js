"use strict";

window.MYSPACE = window.MYSPACE || {};
window.MYSPACE.numbersArray = [0, -4, 18, 3, -1, 2];

window.MYSPACE.getEvenNumbers = function (array) {
    return array.filter(e => e % 2 === 0);
};

window.MYSPACE.createOneHundredNumbersArray = function () {
    const array = [];

    for (let i = 1; i <= 100; i++) {
        array.push(i);
    }

    return array;
};

(function sortArrayDesc() {
    MYSPACE.numbersArray.sort(function (e1, e2) {
        return e2 - e1;
    });

    console.log("Массив, отсортированный по убыванию: [" + MYSPACE.numbersArray.join(", ") + "]");
})();

(function getFirstFiveElements() {
    console.log("Первые пять элементов массива: [" + MYSPACE.numbersArray.slice(0, 5).join(", ") + "]");
})();

(function getLastFiveElements() {
    console.log("Последние пять элементов массива: [" + MYSPACE.numbersArray.slice(-5).join(", ") + "]");
})();

(function getEvenNumbersSum() {
    console.log("Сумма элементов массива, которые являются чётными числами: " +
        MYSPACE.getEvenNumbers(MYSPACE.numbersArray).reduce((sum, current) => sum + current, 0));
})();

(function getEvenNumbersSquares() {
    console.log("Список квадратов чётных чисел от 1 до 100: "
        + MYSPACE.getEvenNumbers(MYSPACE.createOneHundredNumbersArray()).map(e => e * e).join(", "));
})();