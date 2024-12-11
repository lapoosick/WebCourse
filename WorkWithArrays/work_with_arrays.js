"use strict";

(function () {
    const numbersArray = [0, -4, 18, 3, -1, 2];

    function sortArrayDesc(array) {
        array.sort((e1, e2) => e2 - e1);

        console.log("Массив, отсортированный по убыванию: [" + array.join(", ") + "]");
    }

    function getFiveFirstElements(array) {
        console.log("Первые пять элементов массива: [" + array.slice(0, 5).join(", ") + "]");
    }

    function getFiveLastElements(array) {
        console.log("Последние пять элементов массива: [" + array.slice(-5).join(", ") + "]");
    }

    function getEvenNumbers(array) {
        return array.filter(e => e % 2 === 0);
    }

    function getEvenNumbersSum(array) {
        console.log("Сумма элементов массива, которые являются чётными числами: " +
            getEvenNumbers(array).reduce((sum, number) => sum + number, 0));
    }

    function createOneHundredNumbersArray() {
        const array = [];

        for (let i = 1; i <= 100; i++) {
            array.push(i);
        }

        return array;
    }

    function getEvenNumbersSquares(array) {
        console.log("Список квадратов чётных чисел от 1 до 100: " + getEvenNumbers(array).map(e => e * e).join(", "));
    }

    sortArrayDesc(numbersArray);
    getFiveFirstElements(numbersArray);
    getFiveLastElements(numbersArray);
    getEvenNumbersSum(numbersArray);
    getEvenNumbersSquares(createOneHundredNumbersArray());
})();