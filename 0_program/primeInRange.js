// Arrow function
let prime = (a, b) => {
  for (let i = a + 1; i <= b; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count <= 2) console.log(i);
  }
};
prime(1, 20);
