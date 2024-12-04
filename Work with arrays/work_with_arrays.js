"use strict";

const numbersArray = [0, -4, 18, 3, -1, 2];

console.log("Массив чисел: [" + numbersArray.join(", ") + "]");

function sortArrayDesc(array) {
    array.sort(function (e1, e2) {
        return e2 - e1;
    });
}

sortArrayDesc(numbersArray);

console.log("Массив, отсортированный по убыванию: [" + numbersArray.join(", ") + "]");

function getFirstFiveElements(array) {
    return array.slice(0, 5);
}

console.log("Первые пять элементов массива: [" + getFirstFiveElements(numbersArray).join(", ") + "]");

function getLastFiveElements(array) {
    return array.slice(-5);
}

console.log("Последние пять элементов массива: [" + getLastFiveElements(numbersArray).join(", ") + "]");

function getEvenNumbers(array) {
    return array.filter(e => e % 2 === 0);
}

function getEvenNumbersSum(array) {
    return getEvenNumbers(array).reduce((sum, current) => sum + current, 0);
}

console.log("Сумма элементов массива, которые являются чётными числами: " + getEvenNumbersSum(numbersArray));

function createOneHundredNumbersArray() {
    const array = [];

    for (let i = 1; i <= 100; i++) {
        array.push(i);
    }

    return array;
}

const oneHundredNumbersArray = createOneHundredNumbersArray();

console.log("Массив чисел от 1 до 100: [" + oneHundredNumbersArray.join(", ") + "]");

function getEvenNumbersSquares(array) {
    return getEvenNumbers(array).map(e => e * e);
}

console.log("Список квадратов чётных чисел от 1 до 100: " + getEvenNumbersSquares(oneHundredNumbersArray).join(", "));