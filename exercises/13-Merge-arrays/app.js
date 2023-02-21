let chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];



const mergeArrays = (firstArray, secondArray) => {
    let newArray = [];
    //your code here
    for(let i = 0; i < firstArray.length; i++){
        newArray.push(firstArray[i]);
        newArray.push(secondArray[i]);
    }
    return newArray;
}

// const mergeArrays = (firstArray, secondArray) => {
//     let newArray = []
//     //your code here
//     newArray = firstArray.concat(secondArray)
//     return newArray
// }



console.log(mergeArrays(chunk_one, chunk_two));