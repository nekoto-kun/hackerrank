let s = '12:05:45PM';
let h = +s.substr(0,2);
let hs = s.substr(8,2) === 'PM' && h < 12 ? h + 12 : (s.substr(8,2) === 'AM' && h >= 12 ? h - 12 : h);

hs = '0' + hs;

console.log(hs.substr(-2) + s.slice(0,8).slice(2,8));