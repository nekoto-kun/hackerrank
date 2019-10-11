let arr = [1,2,3,4,5];

let sums = [Number.MAX_SAFE_INTEGER,0];

for (let i = 0; i < arr.length; i++) {
  let sum = arr.filter((val, index) => index !== i).reduce((a, b) => a + b);
  sums[0] = sums[0] > sum ? sum : sums[0];
  sums[1] = sums[1] < sum ? sum : sums[1];
}

console.log(sums[0] + ' ' + sums[1]);