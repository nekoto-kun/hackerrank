let n = 7;
let ar = [1,2,1,2,1,3,2];

let socks = [...new Set(ar)];
let counts = {};
let canBePaired = 0;
ar.forEach(sock => counts[sock] = (counts[sock] || 0) + 1);
Object.entries(counts).map(count => count[1]).forEach(count => canBePaired += Math.floor(count / 2));

console.log(canBePaired);