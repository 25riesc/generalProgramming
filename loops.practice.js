// loops practice hw
// 1. Use a for loop to output (console.log) all of the even numbers between 1 and 21.
// for (let n=0;n<21;n=n+2){
//      console.log(`${n} is even`)
//  }

// 2. rewrite the code below with a while loop:

// let i = 0
// while (i < 3) {
//     i++ 
//     alert( `number ${i}!` ); 
// }

// 3. Write a loop which prompts for a number greater than 100. If the visitor enters another number – 
// ask them to input again. The loop must ask for a number until either the visitor enters a number 
// greater than 100 or cancels the input/enters an empty line. Here we can assume that the visitor 
// only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
// let input = 0
// while (input<=100){
//     input = prompt('input a number > 100')

// }

// 4.  Write the function sumInput() that:
// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

// let sumImput=0
// while(true){
//     let value= prompt("enter numbers to add")
//     value = Number(value)
//     if (!value && value != 0){
//         break
//     }
//     sumImput+=value
// }
// console.log(`sum=`+ sumImput) // YIPPEE


// 5.   Let’s try 5 array operations.Create an array styles with items “Jazz” and “Blues”.Append “Rock-n-Roll” 
// to the end.Replace the value in the middle with “Classics”. Your code for finding the middle value should 
// work for any arrays with odd length.Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array

let music=["jazz","blues",]
console.log(music)
music.push("rock-n-roll")
console.log(music)
music[((music.length)-1)/2]="classics"
console.log(music)
music.shift()
console.log(music)
music.unshift("rap","reggae",)
console.log(music)