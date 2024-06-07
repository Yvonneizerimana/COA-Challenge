let contigousSubArrayWithinTheSum=(array,target)=>{
        let sum=0;
        let start=0;

        for (let i=0; i<array.length; i++){
            sum+=array[i];
        
            while(sum>target && start<=i){
                sum-=array[start];
                start++;

            }
            if(sum===target){
                return true
            }
            
        }
        return false
}

const array=[4, 2, 7, 1, 9, 5];
const target=17;
console.log(contigousSubArrayWithinTheSum(array,target));