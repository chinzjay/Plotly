// d3.json("samples.json").then(data=>console.log(data))

// //Why not like this?
// // personOne=d3.json("samples.json").then(data=>data.metadata[0])
// // console.log(personOne)

// d3.json("samples.json").then(data=>{
//     firstPerson=data.metadata[0]
//     Object.entries(firstPerson).forEach(([key, value])=>
//     console.log(key+':'+value))
// })

d3.selectAll("body").on("change", updatePage)
function updatePage(){
    var dropDownMenu=d3.selectAll('#selectOption').node()
    var dropDownMenuId=dropDownMenu.id
    var selectedOption=dropDownMenu.value
    console.log(dropDownMenuId);
    console.log(selectedOption);
}