/*
a function is a  set of instructions that are all packaged together
useful if you need to  reuse those instrutions, especially if they are reused in 
multiple places or with various starting conditions
- function name, parameters, arguments

function functionName(parameters){
    code
}
    functionName(arguments)

*/
//make a function that returns a message about a favorite animal
function favoriteAnimal(animal){
    return animal + " is my favorite animal"
}
console.log(favoriteAnimal("panda"))

//what happens inside a function is frequetly invisible to the outside world
//referred to in programming as scope
//local scope is in a function
//global scope is main program
//an example
let test1 = 1
let test2=5
function add1(num) {//<-no reserved words
    test2=test2+1
    return num+1
}
console.log(add1(test1))
console.log(test2)

//to summarize- a function can change the value of a global variable 
//but only if that variable is used by name withn the function
//variables that are passed as arguments to the function will remain unchanged

//we can mke optional parameters
//when u make paarmeter you assign a value to it
// function greetings(name="carrie"){
//     console.log(`hello ${name}`)
// }
// greetings ("carrie");
// greetings ("mr smith"); //<- call a function
// greetings();
// //hhhhh
// //anynonymous functions - used if a function expects t take another function as a parameter
// //function doesnt have a function name
// (function (){
//     alert("this is an anonymous function")
// }
// )
// //actual example
// function logKey(event) {
//     console.log(`you pressed the "${event.key}"`)
// }
// this.addEventListener("keydown", logKey)

//arrow notation
this.addEventListener("keydown", (event) => {
    console.log(``)
}
)