let arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
let randomNumber = 0;
for(let i = 0; i < 10; i++){
    randomNumber = Math.floor(Math.random() * 100) + 1 
    arr.push(randomNumber);
}
//*****************
console.log(arr)