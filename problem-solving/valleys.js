let s = 'UUUUDDDDDDUDUDUDUDDDDDDDUDUDUDDUUUUUUUUUUUUUUUUUDDDDUDUDUDUDUUUUUDDDDUUUUUU';
let valleys = 0;
let level = 0;
for (let i = 0; i < s.length; i++) {
  level += s.charAt(i) === 'U' ? 1 : -1;
  valleys += (level === 0 && s.charAt(i) === 'U') ? 1 : 0;
}

console.log(valleys);