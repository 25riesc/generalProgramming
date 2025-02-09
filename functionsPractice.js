//1. Write a function called multiply that takes 2 numbers and returns their product

// let x= 7
// let y= 2
// function multiply(num) {
//      num=x*y
//      return num
// }
//  console.log(multiply())
// 4. 
// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

// function checkAge(age) { 
//     if (age > 18) { 
//          return true; 
//      } else { 
//          return confirm('Did parents allow you?');
// }
// }

//Will the function work differently if else is removed? no

// function checkAge(age) { 
//   if (age > 18) { 
//      return true;
// } 
// return confirm('Did parents allow you?');
// }

// Is there any difference in the behavior of these two variants? no

// 5. Rewrite the previous function using either "?" or "||" so that you can do the whole function on one line
// function checkAge(age) { 
//     (age>18) ||  confirm('Did parents allow you?')
//     (age<18) || true
// }
//   checkAge(2) //it works but also error 
// 6. Write a function min(a,b) which returns the least of two numbers a and b.

function min(a,b){
    if(a<b) { 
        console.log(`${a}<${b}`)
    }else{ 
        console.log(`${b}<${a}`)
    }
}
min(2,1)
// 7. Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// *this function only needs to handle positive integers*
