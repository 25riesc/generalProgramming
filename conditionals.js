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
// let temperature = 30
// let precipitation = true
// let coat = 0
//t-shirt & shorts (>75), t-shirt & pants (60-75), long sleeve & pants (>45), 
// sweatshirt and pants (<45), raincoat (if raining, instead of top)

// if(precipitation=true){
//     coat= `raincoat`
// } else if(precipitation=false){
//     coat= `no coat`
// } else {console.log('error, undf precip')}

// if (temperature > 75){
//     console.log(`${temperature} = t-shirt & shorts, ${coat}`)
// } else if (temperature > 60){
//     console.log(`${temperature} = t-shirt & pants, ${coat}`)
// } else if(temperature > 45){
//     console.log(`${temperature} = long sleeve & pants, ${coat}`)
// } else {
//     console.log(`${temperature} = sweatshirt & pants, ${coat}`)
// } 

//beware: you must restate your checked value each time
//this wont work: (x==35||15)
//will: (x==35||x=-15)

/*javascript uses truthy and falsey values
a truthy value will be treated the same as true
the following values are truthy:
-true, any not empty string (inc "false"), any 3 other than 0, arrays, functions, and objects
falsey:
-false, 0 or 0n (big int), empty string, Null, und, NaN
OR - finds the first truthy value
ex. */
// let testVariable=null||1||false;
// console.log(testVariable);
// let testVariable2=null||0||false;
// console.log(testVariable2);
/* useful if you have a form that you need a person to fill out
let name=USER_IMPUT || "Unknown name"

can also be used to set up conditional alerts or functions
ex. 
let printSuccess=true
printSuccess || alert ("did not print")
!printSuccess || alert ("success")

AND && finds the first falsey value
evaluate from left-right
converts to boolean
stops when it gets to first falsey value
if no values r falsey, returns last value */
// console.log(true && true && true);
// console.log(true && 0 && true);
// console.log(true && "false" && 3.14);

//precedence - order in which things happen
//&& is higher precedence than ||
//a && b || c
//if you want or to combine b c
// a && (b||c) && d
//dont do this 
// some people use && instead of if
// let x=1;
// (x>0) && alert("greater then 0");
//if statements are much more readable
/* NOT !
! takes a single argument and does the following
- converts the favue to boolean
- returns the opposite of the result
*/
console.log(!NaN)
console.log(!1)
//some people will use !! to convert to boolean
console.log(!!NaN)
//you can use this same operation with
console.log(Boolean(NaN))
/* if we have a lot of possible test cases we wanna check, its often better to use a switch instead of an if
structure:
switch(example){
case x:
    code goes here
    break;
case y:
    code goes here
    break;
case z:
    code goes here
    break;
default:
    code goes here
    break;
}
    the switch expression is evaluated
    if match, the code is executed
    if there is no match, default is execued

gitDay() method - weekday
number between 0-6
an actual "day"
*/
console.log(new Date)
switch(new Date().gitDay()){
    case 0:
        console.log ("sunday");
        break;
    case 1:
        console.log ("monday");
        break;
     case 2:
        console.log ("tuesday");
        break;
    case 3:
        console.log ("wednesday");
        break;
    case 4:
        console.log ("thursday");
        break;
     case 5:
        console.log ("friday");
        break;
     case 6:
        console.log ("saturday");
        break;
}
console.log(day)
