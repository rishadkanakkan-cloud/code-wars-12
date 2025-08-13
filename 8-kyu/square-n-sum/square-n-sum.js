function squareSum(numbers){
  let sum =0;
  for(let num of numbers){
    sum+=num*num;
  }
  return sum;
​
}
console.log(squareSum([1,2,2,3]));