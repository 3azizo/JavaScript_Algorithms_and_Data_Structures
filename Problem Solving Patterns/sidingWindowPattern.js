//sliding window pattern => O(N^2)
function maxSubarraySum(arr, num) {
  let maxSum = 0,
    tempSum = 0;
  if (num > arr.length) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
////////////////////////////////////////////
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
/*
//////////time complexity O(N^2)////arry Methods/////////////
function maxSubarraySum(arr,numD){
    let maxSum=null;
    for(let i=0;i<arr.length;i++){
        let sum=[...arr].splice(i,numD).reduce((prev,cur)=>prev+cur,0)
         if(sum>maxSum) maxSum=sum;
    }
    return maxSum
}*/
/*
////////for loop//////other solution O(N^2)//////////////
function maxSubarraySum(arr,num){
    if(num>arr.length)return null;
    // -infinity =>if arr has nagtive number
    let max=-Infinity;
    for(let i=0 ;i<arr.length-num+1;i++){
        temp=0;
        for(let j=0;j<num;j++){
            temp+=arr[i+j];
        }
        if(temp>max){
            max=temp;
        }
    }
    return max;
}
*/
