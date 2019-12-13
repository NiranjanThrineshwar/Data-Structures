// Recursion - a function which calls itself and stops on a specified condition returning the result. 

// Example of recursion
function recursion(n) {
  if (n <= 1) {
    console.log('Recursion complete');
    return;
  }
  return recursion(n-1);
}

recursion(3);

// Factorial : number multiplied by n-1 times till n === 1
// Factorial without recursion
function Factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i; 
  }
  return result;
}

Factorial(6);

// Factorial with recursion

function RecursiveFactorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * RecursiveFactorial(n - 1);
}

RecursiveFactorial(6);