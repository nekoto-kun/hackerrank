function findDigits(n) {
  let num = n.toString().split('').map(digit => +digit);
  console.log(num.filter(digit => n % digit === 0).length);
}

findDigits(1012);