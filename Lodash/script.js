"use strict";

(function () {
    const people = [
        {
            age: 18,
            name: "Иван"
        },
        {
            age: 24,
            name: "Кирилл"
        },
        {
            age: 33,
            name: "Мария"
        },
        {
            age: 35,
            name: "Анна"
        },
        {
            age: 25,
            name: "Елена"
        },
        {
            age: 20,
            name: "Елена"
        },
        {
            age: 28,
            name: "Светлана"
        },
        {
            age: 30,
            name: "Иван"
        },
        {
            age: 40,
            name: "Кирилл"
        },
        {
            age: 23,
            name: "Иван"
        }
    ]

    function getAverageAge(people) {
        return _.chain(people)
            .map(p => p.age)
            .sum()
            .value() / people.length;
    }

    function getPeopleFrom20To30(people) {
        return _.chain(people)
            .filter(p => p.age >= 20 && p.age <= 30);
    }

    function getPeopleFrom20To30SortedByAgeAscending(people) {
        return getPeopleFrom20To30(people)
            .sortBy(p => p.age)
            .value();
    }

    function getPeopleFrom20To30UniqueNamesDescending(people) {
        return getPeopleFrom20To30(people)
            .map(p => p.name)
            .uniq()
            .orderBy(this, ["desc"])
            .value();
    }

    function getNamesAndPeopleHavingTheseNamesCounts(people) {
        return _.chain(people)
            .map(p => p.name)
            .countBy()
            .value();
    }

    console.log("Средний возраст всех человеков: " + getAverageAge(people));
    console.log(getPeopleFrom20To30SortedByAgeAscending(people));
    console.log(getPeopleFrom20To30UniqueNamesDescending(people));
    console.log(getNamesAndPeopleHavingTheseNamesCounts(people));
})();