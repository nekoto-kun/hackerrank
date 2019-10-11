function diff(arr) {
  let a = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length && j >= 0; i++, j--) {
    a += Math.abs(arr[i][i] - arr[i][j]);
  }
  return a;
}

console.log(diff([[13,2,3],[4,5,6],[7,8,9]]));