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

// function that takes an array and uses recursion to return its contents in reverse. 

const recursiveReverse = function(orderedArr) {
  let reversedArr = [];
  let addItems = (orderedArr) => {
    // if array is empty, return
    if(orderedArr.length > 0) {
      reversedArr.push(orderedArr.pop());
      addItems(orderedArr);
    }
    return;
  };

  addItems(arr);

  return reversedArr;
}

// function that takes 2 args, 'arr and num', and multiplies each arr value by num and returns an array of the values. 

let recursiveMultiplier = function(arr, num) {
  let multipliedArr = [];
  let multiplyItems = () => {
    if(arr.length > 0) {
      multipliedArr.push(arr.shift() * num);
      multiplyItems(arr);
    }
    return;
  };

  multiplyItems(arr);

  return multipliedArr;
}