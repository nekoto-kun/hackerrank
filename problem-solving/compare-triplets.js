function compareTriplets(a, b) {
  let c = [0,0];

  for (let i = 0; i < a.length; i++) {
    c[0] += a[i] > b[i] ? 1 : 0;
    c[1] += a[i] < b[i] ? 1 : 0;
  }

  return c;

}