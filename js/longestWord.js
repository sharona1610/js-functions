function longestWord(sentence){
  maxLength=0;
  for(var i=0;i<sentence.length;i++){
    if(sentence[i].length>maxLength){
      maxLength=sentence[i].length
    }
  }
  return maxLength
}
sentence=["hello", "how", "are", "you"];
console.log(longestWord(sentence));
