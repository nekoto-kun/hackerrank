function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let ap = apples.filter(apple => a + apple >= s).filter(apple => a + apple <= t).length;
  let or = oranges.filter(orange => b + orange <= t).filter(orange => b + orange >= s).length;
  console.log(ap);
  console.log(or);
}

countApplesAndOranges(2,3,1,5,[2],[-2]);