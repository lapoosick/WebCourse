"use strict";

(function () {
    const numbersArray = [0, -4, 18, 3, -1, 2];

    function sortArrayDescending(array) {
        array.sort((e1, e2) => e2 - e1);
    }

    function getFirstElements(array, elementsCount) {
        return array.slice(0, elementsCount);
    }

    function getLastElements(array, elementsCount) {
        return array.slice(-elementsCount);
    }

    function getEvenNumbers(array) {
        return array.filter(e => e % 2 === 0);
    }

    function getEvenNumbersSum(array) {
        return getEvenNumbers(array).reduce((sum, number) => sum + number, 0);
    }

    function createOneHundredNumbersArray() {
        const array = [];

        for (let i = 1; i <= 100; i++) {
            array.push(i);
        }

        return array;
    }

    function getEvenNumbersSquares(array) {
        return getEvenNumbers(array).map(e => e * e);
    }

    sortArrayDescending(numbersArray);

    console.log("Массив, отсортированный по убыванию: [" + numbersArray.join(", ") + "]");
    console.log("Первые пять элементов массива: [" + getFirstElements(numbersArray, 5).join(", ") + "]");
    console.log("Последние пять элементов массива: [" + getLastElements(numbersArray, 5).join(", ") + "]");
    console.log("Сумма элементов массива, которые являются чётными числами: " + getEvenNumbersSum(numbersArray));
    console.log("Список квадратов чётных чисел от 1 до 100: " + getEvenNumbersSquares(createOneHundredNumbersArray()).join(", "));
})();