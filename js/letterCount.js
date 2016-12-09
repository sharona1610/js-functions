function letterCount(sentence){
var final={}
  for(var i=0;i<sentence.length;i++){
    if(final[sentence[i]]!=null){
      final[sentence[i]]++
    }
    else{
      final[sentence[i]]=1
    }
  }
    return final
}
sentence="abvawfrvnafklvnfs"
  console.log(letterCount(sentence));
