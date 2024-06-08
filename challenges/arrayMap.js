// this function find if this array has the sub array that can sum up to the target value 
function find(arr, target){
    let left=0;
    let sum=0;
    // traversing through array
    for(let i=0; i<arr.length; i++){
        // establishing a variable sum which will change
        sum+=arr[i];
        // when the sum will be greater than target we will start to subtract values from left
        while (sum>target && left<=i){
            sum= sum-arr[left];
            left++;
        }
        if (sum==target){
            return (true);// when the sum is equal to target we will return true
        }
    }
    return false;// otherwise we will return false
}
const arr=[4, 2, 7, 1, 9, 5];
console.log(find(arr, 17));