
/* notes on loops on js
a great way to repeat a set of steps
if you have something you want to do multiple times in a row
or until soemthing happens, loops are ideal
two flavors
- while loops
- for loops

while loops-
while (condition){
//code
}
example: */
// let i=0;
// while (i<3){
//     console.log(i);
//     i++; //shorthand for i += 1, shodthand for i=i + 1
// }
// /* single time through a loop is an iteration
// while loops continue until codition is falsey */
// while (i){
//     console.log("banana phone");
//     i--;
// }
/* second flavor called a do...while loop
difference is a do while will always execute at least once
 //example
do {
//code goes here
} while (condition)
*/
// let a=0
// do{
//     console.log(a)
//     a += 1
// } while (a<-1)
/* other type is FOR loop
fancy while loops, more complicated, less likely for an inf loop
for (begin; condition; step) {
//code
}
example */
// for (let j=0;j<5;j++){
//     console.log(`j=${j}`)
// }
/* with either form, if your condition is based on a #, use <,>,<=,>=.
= and =! are likely to miss and make an inf loop
youll find that sometimes be off by 1, frequently the solution is just to change between < <= > >=

you can skip elements of the loop declaration
let i=0
for(;i<3, i++){
    console.log(i)
}
for(let i=0; i<3){
console.log(i++)
}
let i = 0
for (; i<3;){
    console.log(i)
    i++
}
for (;;) {//inf loop
}

BREAK - a command that will immediately exit you from a loop and advance to te next part of your code
put breaks in as failsafes if a inf loop is possible */
//ex 1 - get a number form the user
// let sum=0
// while(true){
//     let value= +prompt("enter a number",'')
//     if (!value){
//         break
//     }
//     sum+=value
// }
// console.log(`sum=`+ sum)

//ex 2 - add num from 1 to a given value with a timeout function
// let sum=0
// let now=Date.now()
// let max = +prompt(`add the numbers from 1 to...`)
// for (let i=1; i<=max; i++){
//     sum += i
//     if (Date.now()>now+2000){
//         alert(`uh`)
//         break
//     }
// }
// console.log(sum)

/*continue is like a lighter version of break
instead of ejecting you out of the loop it skips to the end of the iteration
example - print odd numbers from 1 to 20*/
// for(let i=0;i<23;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log (i)
// }

