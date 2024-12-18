"use strict";

(function () {
    const countries = [
        {
            name: "country1",
            cities: [
                {
                    name: "country1_city1",
                    population: 100
                },
                {
                    name: "country1_city2",
                    population: 150
                },
                {
                    name: "country1_city3",
                    population: 120
                }
            ]
        },
        {
            name: "country2",
            cities: [
                {
                    name: "country2_city1",
                    population: 140
                },
                {
                    name: "country2_city2",
                    population: 130
                }
            ]
        },
        {
            name: "country3",
            cities: [
                {
                    name: "country3_city1",
                    population: 90
                }
            ]
        },
        {
            name: "country4",
            cities: [
                {
                    name: "country4_city1",
                    population: 180
                },
                {
                    name: "country4_city2",
                    population: 170
                },
                {
                    name: "country4_city2",
                    population: 190
                }
            ]
        }
    ];

    function getMaxCitiesCountCountries(countries) {
        let maxCitiesCount = 0;

        countries.forEach(country => {
            const citiesCount = country.cities.length;

            if (citiesCount > maxCitiesCount) {
                maxCitiesCount = citiesCount;
            }
        });

        return countries.filter(country => country.cities.length === maxCitiesCount);
    }

    function getCountriesPopulations(countries) {
        const countriesPopulations = {};

        countries.forEach(country => {
            countriesPopulations[country.name] = country.cities.reduce((countryPopulation, city) => countryPopulation + city.population, 0);
        });

        return countriesPopulations;
    }

    console.log(getMaxCitiesCountCountries(countries));
    console.log(getCountriesPopulations(countries));
})();