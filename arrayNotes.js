/*arrays
in programming an array is a collection of values
an ordered collection of values
simpler than objects
most programming langs treat arrays the same
format:
let arrayName=[item1, item2, item3, item4]
empty:
let fakeArray= new Array()
let fakeArray2= []
*/
let fruits=["apples", "bananas", "cantalope", "durian", "lychees", ]
console.log(fruits[3])
//arrays are 0 indexed - start counting from 0
fruits[3]="watermelon"
console.log(fruits)
//add strawberries
fruits[5]="strawberries"
console.log(fruits)
//count how long an array is
console.log(fruits.length)
fruits[fruits.length]= "blueberries"
console.log(fruits)
//an array can store elements of any type, including mixing types
// let exampleArray2=["apple", 35, true, functon() {console.log(`hello`);}, "array"]
// console.log(exampleArray2[1])
// console.log(exampleArray2[2])
// console.log(exampleArray2[3])
//do math - distance formula
let obj1=[3,5];
let obj2=[9,11];
let dist=Math.sqrt(((obj1[0]-obj2[0])**2)+((obj1[1]-obj2[1])**2));
console.log(dist)
let primes=[2, 3, 5, 7, 11, 13, 17];
let i=0
while(i<primes.length){
    console.log(primes[i])
    i++
}