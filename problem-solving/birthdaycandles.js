let ar = [4,10,10,4,2,4,2,1];

let highest = ar.reduce((prev, cur) => cur > prev ? cur : prev, ar[0]);
// console.log(ar.filter(val => val === highest).length);

let s = '12:05:45PM';
let h = +s.substr(0,2);
let hs = s.substr(8,2) === 'PM' && h < 12 ? h + 12 : (s.substr(8,2) === 'AM' && h >= 12 ? h - 12 : h);

hs = '0' + hs;

// console.log(hs.substr(-2) + s.slice(0,8).slice(2,8));

let grades = [73,67,38,33];
// console.log(grades.map(grade => grade % 5 >= 3 && grade >= 38 ? grade + (5 - grade % 5) : grade));