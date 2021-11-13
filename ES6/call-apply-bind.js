// call, apply, bind

const obj = {num: 2};

const sum =  function(a, b, c) {
  return this.num + a + b + c;
}

// this will give NaN since his.num as undefined since it cant find num
console.log(sum(1, 2, 3));

console.log(sum.call(obj, 1, 2, 3));

console.log(sum.apply(obj, [1, 2, 3]));

// returns me a bind object with bound function to call with arguments
const boundObj = sum.bind(obj);

console.log(boundObj(1, 2, 3));