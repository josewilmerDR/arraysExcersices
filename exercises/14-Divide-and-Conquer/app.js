let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(array){
    let odd = [];
    let even = [];
    //let newListOfNumbers = [];
    for(let i = 0; i < array.length; i++){
        //array[i] % 2 == 0 ? even.push(array[i]) : odd.push(array[i])
        if(array[i] % 2 === 0){
            even.push(array[i])
        }else{
            odd.push(array[i])
        }
    }
    // for (let i = 0; i < array.length; i++) {
    //     array[i] % 2 == 0 ? even.push(array[i]) : odd.push(array[i])
    // }
    return odd.concat(even)
  
}
console.log(mergeTwoList(list_of_numbers))