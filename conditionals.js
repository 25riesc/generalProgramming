/*
comparisons in JS look like math equations to an extent
a < b is an example
a > b is another
a == b
a <= b
a >= b

*/
/*
// examples
let a = 2+3;
console.log ( 5 < 3 );
console.log (5 > 3);
console.log (a == 5);
console.log (a == "5");

//JS has a triple equal sign for strict equality
console.log ( a === "5");

//! means not
console.log(a != 3)
console.log("badin" > "Ross")
/*rules for string comparison
1. if the first character of the first string is greater than first character of 2nd, 
return true - other way=false, if equal do next step
2. compare characters until end
3. if equal and have same length, return false
4. longer string is greater than other string */
// console.log("r">"b")
//now that we know how comparisons work, we can look at conditionals
//an if statement allows you to "gate" code behind a condition being true
// if(3<5){
//     console.log("3<5")
// }
// //if you want to make a choice between options
// if (7<5){
//     console.log("7 is < 5")
// } else {console.log("7 not greater than 5")}

// //a test for equality. check if test number is <>= 6
// let testNumber=6
// if(testNumber>6) {
//     console.log(`${testNumber} is greater than 6.`)
// } else {
//     if(testNumber<6) {  
//         console.log(`${testNumber} is less than 6.`)
// } else {
//     console.log(`${testNumber} is equal to 6.`)
// }
// }
// //avoid nested if/else statements
// //else-if else-if
// let testNumber=9
// if(testNumber<6){
//     console.log(`${testNumber} is less than 6`)
// } else if (testNumber==6){
//     console.log(`${testNumber} is equal to 6`)  
// } else if (testNumber>6){
//     console.log(`${testNumber} is greater than 6`)  
// }
//grade generator
/*
let testNumber=69420
if(testNumber>90){
     console.log(`${testNumber}=a`);
 } else if (testNumber>80){
     console.log(`${testNumber}=b`)  ;
 } else if (testNumber>70){
     console.log(`${testNumber}=c`)  ;
} else if (testNumber>60){
    console.log(`${testNumber}=d`);
} else {
    console.log(`${testNumber}=f`);
}
*/
//logical operations
//modify or combine multiple logic statements
//and: && -> will return true when both statements r true
//or: || -> will return true when either statement is true
//not: ! -> flips true/false value

//clothing selector based on weather
//two variables: temp & precipitation
let temperature = 30
let precipitation = true
let coat = 0
//t-shirt & shorts (>75), t-shirt & pants (60-75), long sleeve & pants (>45), 
// sweatshirt and pants (<45), raincoat (if raining, instead of top)

if(precipitation=true){
    coat= `raincoat`
} else if(precipitation=false){
    coat= `no coat`
} else {console.log('error, undf precip')}

if (temperature > 75){
    console.log(`${temperature} = t-shirt & shorts, ${coat}`)
} else if (temperature > 60){
    console.log(`${temperature} = t-shirt & pants, ${coat}`)
} else if(temperature > 45){
    console.log(`${temperature} = long sleeve & pants, ${coat}`)
} else {
    console.log(`${temperature} = sweatshirt & pants, ${coat}`)
} 

