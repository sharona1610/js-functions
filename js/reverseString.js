function reverseString(sentence){
  var newString=""
  for (var i=sentence.length-1; i>=0;i--){
    newString+= sentence[i];
  }
  return newString
}
sentence="hello how are you"
console.log(reverseString(sentence));
