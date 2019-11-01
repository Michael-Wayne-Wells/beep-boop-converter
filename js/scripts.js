var userNum="332"

function countUp(userNum){
  var numArray=[];
  for(i = 0; i <= userNum; i+=1){
    numArray.push(i);
  }
  return numArray;
}
var countUpResults = (countUp(userNum).join().split(","));

function replaceNums(countUpResults){
  var replaceArray = [];
  var testArray = ["3", "2", "1"];
  var resultsArray =["I'm sorry Dave. I'm afraid I can't do that.", "Boop!", "Beep!"];
  countUpResults.forEach(function(result){
    var numberTest1 = false;
    var numberTest2 = false;
    var numberTest3 = false;
    for(var j=0;j<result.length;j+=1){
      if(result[j] === testArray[0]){
        numberTest1 = true;
      } else if(result[j] === testArray[1]){
        numberTest2=true;
      } else if(result[j] === testArray[2]){
        numberTest3=true;
      } else {
        result[j]=result[j];

      };
    };
    if(numberTest1 === true){
      replaceArray.push(resultsArray[0]);
    } else if(numberTest2 === true && numberTest1 === false) {
      replaceArray.push(resultsArray[1]);
    } else if (numberTest3 === true && numberTest1 === false && numberTest2 === false) {
      replaceArray.push(resultsArray[2]);
    } else {
      replaceArray.push(result);
    };
    return replaceArray;
  });
  return replaceArray;
};
var replaceResults = replaceNums(countUpResults);

console.log(replaceResults);
//test
userNum="332"
