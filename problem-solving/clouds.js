let c = [0,0,1,0,0,0];

let i = 0;
let jumps = 0;

while (i < c.length - 1) {
  jumps += c[i + 2] === 0 || c[i + 1] === 0 ? 1 : 0;
  i += c[i + 2] === 0 ? 2 : (c[i + 1] === 0 ? 1 : 0);
}

console.log(jumps);

function diff(arr) {
  let a = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length && j >= 0; i++, j--) {
    a += Math.abs(arr[i][i] - arr[i][j]);
  }
  return a;
}

console.log(diff([[13,2,3],[4,5,6],[7,8,9]]));