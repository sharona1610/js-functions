function sumArray(num){
  var sum=0;
  for(var i=0;i<num.length;i++){
    sum+=num[i];
  }
  return sum;
}

function multiplArray(num){
  var mult=1;
  for(var i=0;i<num.length;i++){
    mult*=num[i];
  }
  return mult;
}
num1=[1,2,3,4]
console.log(sumArray(num1));
console.log(multiplArray(num1));
