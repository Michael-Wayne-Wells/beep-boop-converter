
function countUp(userNum){
var numArray=[];
for(i = 0; i <= userNum; i+=1){
  numArray.push(i);
}
return numArray;
}

userNum=4

console.log(countUp(userNum));
