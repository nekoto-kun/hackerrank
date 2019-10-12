function superDigit(n, k) {
  let digit = (num) => {
    if (num < 10) {
      return num;
    } else {
      let x = [...num + ''].map(v => +v).reduce((acc, cur) => acc + cur);
      return digit(x);
    }
  };
  return digit([...n + ''].map(v => +v).reduce((acc, cur) => acc + cur) * k);
}

console.log(superDigit(41512512,4));