function fact(number) {
  let ans = "";
  // number=192
  ans = ans + number;
  ans = ans + number * 3;
  ans = ans + number * 2;
  console.log(ans);
  //create array of size 9

  const arr = new Array(9).fill(0);
  console.log("__________________________", arr);
  //increse index count

  for (let i = 0; i < arr.length; i++) {
    arr[ans[i] - "0" - 1]++;
  }
  console.log("++++++++++++++++++++", arr);

  //check if repeated or not

  for (let i = 0; i < arr.length; i++) {
    //  console.log('inside for loop')
    if (arr[i] != 1) {
      return false;
    }
  }
  return true;
}
let response = fact(853);
if (response) {
  console.log("FASCINATING NUMBER");
} else {
  console.log("NOT FASCINATING NUMBER");
}
