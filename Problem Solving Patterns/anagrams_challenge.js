function validAnagram(str1,str2){
    if(str1.length!==str2.length)return false;
     
    let strOb1={}
    let strOb2={}
    for(val of str1){
        strOb1[val]=(strOb1[val]||0)+1
    }
    for(val of str2){
        strOb2[val]=(strOb2[val]||0)+1
    }
    // console.log(strOb1,strOb2);
   
    for(let i=0;i<str1.length;i++){
        let key=str1[i];
        if(strOb1[key]!==strOb2[key])return false
    };
    return true
}

//test case 
console.log("#".repeat(10));
console.log(validAnagram("",""))//true
console.log(validAnagram("aaz","zza"))//false
console.log(validAnagram("anagram","nagaram"))//true
console.log(validAnagram("rat","car"))//false
console.log(validAnagram("awesome","awesom"))//false
console.log(validAnagram("texttwisttime","timetwisttext"))//true
console.log("#".repeat(10));

//test case 
console.log("#".repeat(10));
console.log(validAnagram("",""))//true
console.log(validAnagram("aaz","zza"))//false
console.log(validAnagram("anagram","nagaram"))//true
console.log(validAnagram("rat","car"))//false
console.log(validAnagram("awesome","awesom"))//false
console.log(validAnagram("texttwisttime","timetwisttext"))//true
console.log("#".repeat(10));