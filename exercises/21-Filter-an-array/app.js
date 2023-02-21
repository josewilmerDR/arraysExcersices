let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
let resultingNames = allNames.filter(thename => {
    
    if(thename[0] === "R") return thename

    //thename.startsWith("R")
})

console.log(resultingNames);