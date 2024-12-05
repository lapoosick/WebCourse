"use strict";

window.OBJECTS_SPACE = window.OBJECTS_SPACE || {};

window.OBJECTS_SPACE.countries = [
    {
        countryName: "country1",
        cities: [
            {
                cityName: "country1_city1",
                population: 100
            },
            {
                cityName: "country1_city2",
                population: 150
            },
            {
                cityName: "country1_city3",
                population: 120
            }
        ]
    },
    {
        countryName: "country2",
        cities: [
            {
                cityName: "country2_city1",
                population: 140
            },
            {
                cityName: "country2_city2",
                population: 130
            }
        ]
    },
    {
        countryName: "country3",
        cities: [
            {
                cityName: "country3_city1",
                population: 90
            }
        ]
    },
    {
        countryName: "country4",
        cities: [
            {
                cityName: "country4_city1",
                population: 180
            },
            {
                cityName: "country4_city2",
                population: 170
            },
            {
                cityName: "country4_city2",
                population: 190
            }
        ]
    }
];

(function () {
    const countries = OBJECTS_SPACE.countries;

    countries.sort((country1, country2) => {
        return country2.cities.length - country1.cities.length;
    });

    const maxCitiesCount = countries[0].cities.length;

    console.log(countries.filter(e => e.cities.length === maxCitiesCount));
})();

(function () {
    const countriesPopulations = {};

    OBJECTS_SPACE.countries.map(c => {
        countriesPopulations[c.countryName] = c.cities.reduce((countryPopulation, currentCity) => countryPopulation + currentCity.population, 0);
    });

    console.log(countriesPopulations);
})();