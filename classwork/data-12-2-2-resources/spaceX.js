//actual API call to SpaceX is made in these two lines of code
const url="https://api.spacexdata.com/v2/launchpads"
d3.json(url).then(receivedData=>console.log(receivedData))

//retrieve the full_name of the Vandenberg Air Force Base 
d3.json(url).then(spaceXResults=>console.log(spaceXResults[0].full_name))

////retrieve the latitude of the Vandenberg Air Force Base 
latitude=d3.json(url).then(data=>data.map(row=>row.location.latitude))
console.log(latitude)
longitude=d3.json(url).then(data=>data.map(row=>row.location.longitude))
console.log(longitude)