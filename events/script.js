d3.selectAll("body").on("change", updatePage)
function updatePage(){
    var dropDownMenu=d3.selectAll('#disney-select').node()
    var dropDownMenuId=dropDownMenu.id
    var selectedOption=dropDownMenu.value
    console.log(dropDownMenuId)
    console.log(selectedOption)
}