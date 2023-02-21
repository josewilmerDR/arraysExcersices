//Code goes here
function matrixBuilder(n) {
    let matrix = []
    for(let i = 0; i < n; i++){
        let row = [];
        for(let i = 0; i < n; i++){
            row.push(Math.floor(Math.random() * 2))
        }
        matrix.push(row)
    }
    return matrix
}



// function matrixBuilder(num){
//     let rows = [];
//     let colums = [];
//     let ZeroOne = Math.floor(Math.random() * num) 
//     for(let i = 0; i < num; i++){
//         //rows.push(ZeroOne)
//         for(let i = 0; i < num; i++){
//            return colums.push(ZeroOne)
//         }
//     }  
// }

//do not change anything from this line down
console.log(matrixBuilder(5))
