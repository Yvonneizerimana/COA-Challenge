let contigousSubArrayWithinTheSum=(array,target)=>{
        let currentSum=0;
        let start=0;

        for (let i=0; i<array.length; i++){
            currentSum+=array[i];
        
            while(currentSum>target && start<=i){
                currentSum-=array[start];
                start++;

            }
            if(currentSum===target){
                return true
            }
            
        }
        return false
}

const array=[4, 2, 7, 1, 9, 5];
const target=17;
console.log(contigousSubArrayWithinTheSum(array,target));