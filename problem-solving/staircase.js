function staircase(n) {
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j > i; j--) {
      process.stdout.write(` `);
    }
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write(`#`);
    }
    process.stdout.write(`\n`);
  }
}