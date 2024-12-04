"use strict";

window.ARRAYS_SPACE = window.ARRAYS_SPACE || {};
window.ARRAYS_SPACE.numbersArray = [0, -4, 18, 3, -1, 2];

window.ARRAYS_SPACE.getEvenNumbers = function (array) {
    return array.filter(e => e % 2 === 0);
};

window.ARRAYS_SPACE.createOneHundredNumbersArray = function () {
    const array = [];

    for (let i = 1; i <= 100; i++) {
        array.push(i);
    }

    return array;
};

(function sortArrayDesc() {
    ARRAYS_SPACE.numbersArray.sort((e1, e2) => {
        return e2 - e1;
    });

    console.log("Массив, отсортированный по убыванию: [" + ARRAYS_SPACE.numbersArray.join(", ") + "]");
})();

(function getFirstFiveElements() {
    console.log("Первые пять элементов массива: [" + ARRAYS_SPACE.numbersArray.slice(0, 5).join(", ") + "]");
})();

(function getLastFiveElements() {
    console.log("Последние пять элементов массива: [" + ARRAYS_SPACE.numbersArray.slice(-5).join(", ") + "]");
})();

(function getEvenNumbersSum() {
    console.log("Сумма элементов массива, которые являются чётными числами: " +
        ARRAYS_SPACE.getEvenNumbers(ARRAYS_SPACE.numbersArray).reduce((sum, current) => sum + current, 0));
})();

(function getEvenNumbersSquares() {
    console.log("Список квадратов чётных чисел от 1 до 100: "
        + ARRAYS_SPACE.getEvenNumbers(ARRAYS_SPACE.createOneHundredNumbersArray()).map(e => e * e).join(", "));
})();