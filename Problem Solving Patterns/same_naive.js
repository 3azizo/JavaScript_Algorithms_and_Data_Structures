//time complexity - O(n**2)
function same(arr,arr2){
    if(arr.length!==arr2.length)return false;
    for(let i=0;i<arr.length;i++){
        let correctIndex=arr2.indexOf(arr[i]**2);
        if(correctIndex==-1){
            return false

        }
        arr.splice(correctIndex,1)
    }
    return true
}
//test case
console.log(same([1,2,3],[4,1,9]))//true
console.log(same([1,2,3],[1,9]))//false
console.log(same([1,2,1],[4,1,4]))//true
