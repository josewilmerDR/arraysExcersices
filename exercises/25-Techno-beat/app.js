// Add your code here
function lyricsGenerator(arr) {
    let lyrics = "";
    let countOnes = 0;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        lyrics += "Boom ";
      } else if (arr[i] === 1) {
        lyrics += "Drop the base ";
        countOnes++;
        if (countOnes === 3) {
          lyrics += "!!!Break the base!!! ";
          countOnes = 0;
        }
      } else {
        return "Error: el arreglo solo debe contener 1s y 0s ";
      }
    }
    
    return lyrics;
  }
  
  

// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))