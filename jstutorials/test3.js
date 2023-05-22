// function sumOfElements(arr) {
//   let i = 0;
//   let j = arr.length - 1;
//   let sum1 = 0;
//   let sum2 = 0;

//   while (i < j) {
//     sum1 += arr[i];
//     sum2 += arr[j];
//     i++;
//     j--;
//   }
//   console.log(sum1, sum2);
//   //find difference
//   let difference = sum2 - sum1;
//   return difference;
// }
// console.log(sumOfElements([1, 2, 1, 3, 1, 6]));

function sum(arr) {
  let i = 0;
  let j = arr.length - 1;
  let sum1 = 0;
  let sum2 = 0;
  let mid = Math.floor((i + j) / 2);

  for (let i = 0; i <= mid; i++) {
    sum1 += arr[i];
  }
  for (let k = j; k > mid; k--) {
    sum2 += arr[k];
  }
  console.log(sum1 + " ----- " + sum2);
  let difference = Math.abs(sum1 - sum2);
  console.log(difference);
}
sum([1, 2, 1, 3, 2, 5]);
