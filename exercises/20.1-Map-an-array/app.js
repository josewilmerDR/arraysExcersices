let arrayOfCelsiusValues = [-2,34,56,-10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	
	//add your code here and return the new value °F = (20 × 9/5) + 32

	return (value * 9/5) + 32
	
});

console.log(arrayOfFahrenheitValues);