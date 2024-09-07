
// Part 1: Stack Overflow
// Declare a global counter variable.
let maximumStack=0
// Create a simple function that increments the variable, and then calls itself recursively.
function increment(){
   try{ maximumStack++;
    increment()}
    catch(e){
    console.log(maximumStack);
    console.error(e)}
}
//Part 1: Stack Overflow
increment()
// error message “RangeError: Maximum call stack size exceeded at increment”

   // Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.




//Part II Trampolines
/**
 * Step One: write the recursive function.
 * 
 * Here, we create a function that calculates
 * the factorial of a number, n. A factorial
 * is the product of all positive integers
 * less than or equal to the number, n. 1*2*3*4*5*....n
 */
const  factorial = (n) => {
    if (n === 0) return 1; // The base case, to stop recursion
    return n * factorial(n - 1); // The recursive call
  }

  /**
   * If we were to call the above with a number as
   * high as, say, 50,000, it would result in a stack
   * overflow.
   */
  /**
  * Step Two: modify the recursive function.
  * 
  * In order to trampoline the function, we must
  * return another function instead of calling
  * the recursive function itself. 
  * 
  * This prevents the function from being added 
  * directly to the call stack.
  */

  console.log(factorial(10))
  //console.log(factorial(50000)) 
  //stackoverflow if call 50000

 const facto = (n, a = 1) => {
    if (n === 0) return a;
    return () => facto(n - 1, n * a);
  }
 
  /**
   * Step Three: create a trampoline function.
   * 
   * This function takes another function and a list
   * of arguments, and uses a linear loop rather than
   * traditional recursion to handle the function calls.
   * 
   * This prevents the stack overflow, while still
   * maintaining the declarative approach provided by
   * recursive functions.
   */
  const trampoline = (f, ...args) => {
   let result = f(...args);
   while (typeof result === "function") {
     result = result();
   }
   return result;
 }
 
 console.log(trampoline(factorial,10))
 //console.log(trampoline(factorial,50000))
 // Maximum call stack size exceeded if call 50000
 /**
  * Now, we can call the factorial function with as high
  * a number as we would like (as long as we don't run into
  * other errors, like exceeding MAX_SAFE_INTEGER, or looping
  * too many times...).
  * 
  * Unfortunately, both of these are the case here, but
  * the principle of trampolining holds!
  */


//Part 3: Deferred Execution
// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.
// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.https://perscholas.instructure.com/conversations
// Once complete, use the alert() method to alert the user that the calculation is finished.

//let prime=prompt('Enter a number between 1 to 5000')
