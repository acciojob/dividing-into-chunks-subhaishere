const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const sum = (arr) => arr.reduce((a, b) => a + b, 0);

const divide = (arr, n) => {
  let result = [];
  let subarray = [];

  for (let i = 0; i < arr.length; i++) {
    subarray.push(arr[i]);
    if (sum(subarray) > n) {
      result.push(subarray.slice(0, -1));
      subarray = [arr[i]];
    }
  }

  if (subarray.length > 0) {
    result.push(subarray);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));