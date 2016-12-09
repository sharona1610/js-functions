function sillySum(num){
  var count=0;
  for(var i=0;i<num.length;i++){
    count+= (num[i]*i)
  }
  return count
}
num=[1,2,3,4]
console.log(sillySum(num));
