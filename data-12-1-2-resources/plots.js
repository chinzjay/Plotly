// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  };
//  Plotly.newPlot("plotArea", [trace]);


//Create bar chart
// var trace={
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type:"bar"
// }
// var layout={
//     title:"Beverages vs Orders",
//     xaxis:{title:"Drinks"},
//     yaxis:{title:"No. ordered"}
// }
// Plotly.newPlot("plotArea", [trace], layout)


//Create pie chart
// var trace={
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type:"pie"
// }
// var layout={
//     title:"Pie Chart Beverages vs Orders"
// }
// Plotly.newPlot("plotArea", [trace], layout)

// var trace={
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     mode: 'markers',
//     type:"scatter"
// }
// var layout={
//     title:"Pie Chart Beverages vs Orders"
// }
// Plotly.newPlot("plotArea", [trace], layout)

var numbers = [0,2,4,6,8]
var numPlusFive=numbers.map(num=>num+5)
console.log(numPlusFive)

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(city=>city.population);
console.log(cityNames);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sWords=words.filter(word=>word[0]==="s")
console.log(sWords)

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b).reverse();
console.log(sortedAge);

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1)

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sliced=words.slice(0,3)
console.log(sliced)

var words1 = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

console.log(words1.slice(3, ))