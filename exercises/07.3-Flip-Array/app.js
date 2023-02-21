let arr = [45,67,87,23,5,32,60];
//Your code here.

const newArr = [];
for(let i = arr.length-1; i >=0; i--){
    newArr.push(arr[i]);
}

console.log(newArr);

/*
OTRA FORMA DE HACERLO

arr.reverse();    //Se reversa el arrello original

const newArr = [];//se crea un nuevo arreglo al que se le empujarán los item de arreglo original
for(let i = ; i < arr.length; i++){
    newArr.push(arr[i]);
}

console.log(newArr);

*/