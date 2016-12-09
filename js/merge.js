function merge(num1, num2){
  var final=[];
  for(var i=0;i<num1.length;i++){
    final.push(num1[i])
  }
  for(var i=0;i<num2.length;i++){
    final.push(num2[i])
  }

  function sortNumber(a,b){
    return a-b
  }
  return final.sort(sortNumber)
}

num1=[3,6,11];
num2=[2,4,5,8,9];
var final = merge(num1,num2)
console.log(final);
