let ar = [4,10,10,4,2,4,2,1];

let highest = ar.reduce((prev, cur) => cur > prev ? cur : prev, ar[0]);
console.log(ar.filter(val => val === highest).length);