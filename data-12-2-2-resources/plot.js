//MAking sure the data is loaded
console.log(cityGrowths)

// //Sort the cities in descending order of population growth
// var sortedCities=cityGrowths.sort((a,b)=>b.Increase_from_2016-a.Increase_from_2016)
// //Select only the top five cities in terms of growth
// var topFiveCities=sortedCities.slice(0,5)
// console.log(topFiveCities)

// //create two arrays: an array of city names, and an array of corresponding population growths
// var topFiveCityNames=topFiveCities.map(city=>city.City)
// var topFiveCityGrowths=topFiveCities.map(city=>parseInt(city.Increase_from_2016))
// console.log(topFiveCityNames)
// console.log(topFiveCityGrowths)

// //Create a Bar Chart with the Arrays
// var trace=[{x:topFiveCityNames,
// y:topFiveCityGrowths,
// type:"bar"}]

// var layout={title:"Most Rapidly Growing Cities",
// xaxis:{title:"Cities"},
// yaxis:{title:"Population Growth"}}

// Plotly.newPlot("bar-plot", trace, layout )

var sortedPopulation=cityGrowths.sort((a,b)=>b.population-a.population)
var topSevenCities=sortedPopulation.slice(0,7)
console.log(topSevenCities)

var topSevenPopCities=topSevenCities.map(city=>city.City)
var topSevenPopCityPopulation=topSevenCities.map(city=>city.population)

var trace=[{x:topSevenPopCities,
            y:topSevenPopCityPopulation,
            type:"bar"}];

var layout={title:"Highly Populated Cities",
            xaxis:{title:"Cities"},
            yaxis:{title:"Population"}}

Plotly.newPlot("bar-plot", trace, layout)
