
userNum="4"
function countUp(userNum){
  var numArray=[];
  for(i = 0; i <= userNum; i+=1){
    numArray.push(i);
  }
  return numArray;
}
var resultsString = countUp(userNum).join('')
var countUpResults = resultsString.split();


// var countUpResults = ["1", "4", "3"];
function replaceNums(countUpResults){

  var replaceArray = [];
  var testArray = ['3', '2', '1'];
  var resultsArray =["I'm sorry Dave. I'm afraid I can't do that.", "Boop!", "Beep!"];
  countUpResults.forEach(function(result){
    // result.split('');
    for(i=0;i<result.length;i++){
      if(result[i] === testArray[0]){
      replaceArray.push(resultsArray[0]);
    } else {
      replaceArray.push(result[i]);
    };
  };
});
return replaceArray;
}

var replaceResults = replaceNums(countUpResults);
console.log(replaceResults);

//test
