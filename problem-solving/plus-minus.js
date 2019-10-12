function plusMinus(arr) {
  console.log(arr.filter(a => a > 0).length / arr.length);
  console.log(arr.filter(a => a < 0).length / arr.length);
  console.log(arr.filter(a => a === 0).length / arr.length)
}