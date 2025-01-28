//these r notes on data types
/* there r  8 data types in java
similar between data types
1. numbers - integers &  decimals (floating point) in addition to traditional #, data type includes infiity & NaN
2. bigInt - datatype */
console.log(9007199254740991 + 1)//=9007199254740992 //RAHHHHHH I LOVE CODING me when 52 bit integer limit
console.log(9007199254740991 + 2)//=9007199254740991
//for very large # java script starts to approximate, can be overridden by bigInt, epresented by adding n after
/*
3. string - letters, words, characters, numbers, symbols, treated like text
console.log(5)
console.log("2"+"3")
+ with strings produces concatenation - connecting two symbols one after the other
strings are generally formed by encapsulating symbols in ""
3 types of quotes
- "hello" - double
- 'hello' - single
- `hello` - back ticks
*/
console.log("Hello World!")
console.log('Hello World!')
console.log("This is mr smith's output!") //' in 's confuses it
console.log(`skibidi`)
// if string contains ", use ''
// backticks allow embedding variables into a string
let myName = "steve";
console.log(`Hello, ${myName}`)
//you can also do math or other operations in curly brackets
console.log(`2+3=${2+3}`)
//many programming lang have a 'char' data type representing a single character, java does not
/* 4. boolean
george boole formal logic, t/f statements
boolean data type holds two values: true/false
5. null= one value, null
nothig, empty/value unknown
6. undefined
1 value, und. und in java means that the value has not been assigned
leg age; <- cariable declared but not defined
last two datatypes are objects and symbols, beyond the scope of this class
if u need to know the data type of a variable, you can use the typeof() function
*/
console.log(typeof("word"))
console.log(typeof(365))

//COnditional notes in JS

//In conditional statement is just an if/then
// there are many more complex examples, but all of them are based on if a condition is true and responding
// rely on some form of comparison

/*
comparisons in JS look like math equations to an extent
a < b is an example
a > b is another
a == b
a <= b
a >= b

*/

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
console.log("r">"b")
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