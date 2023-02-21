let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let newArr = []
//console.log(typeof(mix[0]))

let dataType;
for(let i = 0; i < mix.length; i++){
    dataType = typeof(mix[i])
    newArr.push(dataType)
}
console.log(newArr);