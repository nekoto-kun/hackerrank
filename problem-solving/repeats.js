let s = 'abc';
let n = 10;

let count = (s.match(/a/g) || []).length; // number of 'a' occurrences
let word_repeats = Math.floor(n / s.length); // complete word repeats per character count
let diff = n - (s.length * word_repeats); // character count - (string length * word repeats) = character count difference
console.log(word_repeats * count + (s.substr(0, diff).match(/a/g) || []).length); // word repeats * 'a' occurrences + number of 'a' occurrence in a partial word 