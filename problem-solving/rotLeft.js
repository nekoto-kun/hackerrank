function rotLeft(a, d) {
  let b = [];
  b = a.filter((v, i) => i >= d % a.length);
  a = a.filter((v, i) => i < d % a.length);
  
  b = [...b, ...a];
  return b;
}

console.log(rotLeft([41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51], 10));