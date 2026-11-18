// Name: YOUR NAME | Roll: YOUR ROLL NO | Experiment 3 | Task 4
let i = 1, sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
console.log("Sum of 1 to 10 =", sum);
let count = 3;
do {
  console.log("Countdown:", count);
  count--;
} while (count > 0);
for (let k = 1; k <= 8; k++) {
  if (k === 3) continue;
  if (k === 7) break;
  console.log("k =", k);
}
