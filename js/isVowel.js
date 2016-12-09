function isCharacterAVowel(charac){
  if(charac==="a"||charac==="e"||charac==="i"||charac==="o"||charac==="u"){
    return true
  }
  else{
    return false
  }
}
if(isCharacterAVowel("f")){
  console.log("Character  is a vowel");
}
else {
  console.log("Character is a consonant");
}
