let c = [0,0,1,0,0,0];

let i = 0;
let jumps = 0;

while (i < c.length - 1) {
  jumps += c[i + 2] === 0 || c[i + 1] === 0 ? 1 : 0;
  i += c[i + 2] === 0 ? 2 : (c[i + 1] === 0 ? 1 : 0);
}

console.log(jumps);