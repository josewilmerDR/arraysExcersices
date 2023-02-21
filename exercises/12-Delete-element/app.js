let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
function deletePerson(personToDelete){
    for(let i = 0; i < people.length; i++){
        return people.filter((element)=> element !== personToDelete)
    }
}
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));

/*
UNA FUNCION GENERICA, SOLICITA UN ARREGLO Y UNA PERSONA A ELIMINAR
function deletePerson(theArray, personToDelete){
    for(let i = 0; i < theArray.length; i++){
       return theArray.filter((element) => element !== personToDelete)
    }
}
console.log(deletePerson(people, 'daniella'));
*/