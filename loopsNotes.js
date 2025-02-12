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