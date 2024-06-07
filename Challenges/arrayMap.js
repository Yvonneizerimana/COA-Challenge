let contigousSubArrayWithinTheSum=(arr,target)=>{
    //initialise the current sum of the elements in the subarray
        let currentSum=0;
        //initialise the starting index of the subarray
        let start=0;
//loop through each the element in the subarray
        for (let i=0; i<arr.length; i++){
            //add current element to the currentSum
            currentSum+=arr[i];
        // If the currentSum exceeds the target, shift the starting index of the subarray until the currentSum is less than or equal to the target.
            while(currentSum>target && start<=i){
                currentSum-=arr[start];
                start++;

            }
            if(currentSum===target){
                return true
            }
            
        }
        return false
}
//here there is example usage:
const arr=[4, 2, 7, 1, 9, 5];
const target=17;
console.log(contigousSubArrayWithinTheSum(arr,target));