let grades = [73,67,38,33];
console.log(grades.map(grade => grade % 5 >= 3 && grade >= 38 ? grade + (5 - grade % 5) : grade));