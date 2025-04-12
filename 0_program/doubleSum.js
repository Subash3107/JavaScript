let arr = [1, 4, 18, 6, 10, 8];
target = 10;
// hardcoding
for (let a = 0; a < arr.length - 1; a++) {
  for (let b = a + 1; b < arr.length; b++) {
    if (arr[a] + arr[b] === target) {
      console.log(`Pair found: ${arr[a]} and ${arr[b]}`);
    }
  }
}
// minimized
for (let a = 0, b = arr.length; a < arr.length; ) {
  if (arr[a] + arr[b] == target) console.log(arr[a], arr[b]);
  else if (arr[a] + arr[b] < target) a++;
  else b--;
}
