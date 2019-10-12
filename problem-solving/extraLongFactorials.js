function extraLongFactorials(n) {
  n = BigInt(n);
  if (n === 1n) {
    return 1n;
  } else {
    return n * extraLongFactorials(n - 1n);
  }
}
let n = extraLongFactorials(100);

console.log(n);