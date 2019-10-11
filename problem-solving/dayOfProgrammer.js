const dayOfProgrammer = (year) => {  
  let days = 256;
  days -= (year <= 1917 && year % 4 === 0) || ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) && 1;
  days += year === 1918 && 13;

  // let date = new Date(year, 0, 0);
  // date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * days);
  // let gr = [31,28,31,30,31,30,31,31,30,31,30,31];
  // console.log(gr.reduce((acc, cur, idx) => acc + gr[idx + 1] < 256 ? acc + cur : acc));
  console.log(`${days - 243}.09.${year}`);
  // console.log(`${date.getDate()}.${'0' + (date.getMonth() + 1)}.${date.getFullYear()}`);

}

dayOfProgrammer(2016);
dayOfProgrammer(2017);
dayOfProgrammer(1800);
dayOfProgrammer(1918);