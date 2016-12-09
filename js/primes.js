function prime(num){

  for(var i=2;i<num;i++){
    if(num%i===0){
      return false
    }
  }
  return true
}
num=13;
final=[];
for(var i=0;i<=num;i++){
  if(prime(i)){
    final.push(i)
  }
}
console.log(final);
