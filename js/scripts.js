var numUser = ["2", "4", "5", "3", "5", "2", "1", "4"];
var testArray = ['3', '2', '1'];
var results;
var resultsArray =["I'm sorry Dave. I'm afraid I can't do that.", "Boop!", "Beep!"];
for(var j = 0; j<numUser.length; j++) {
  if(numUser[j] == testArray[2]) {
    results = 2
    break;
  } else {
    numUser[j]=numUser[j];
  }
}


for(var j = 0; j<numUser.length; j++) {
  if(numUser[j] == testArray[1]) {
    results = 1
    break;
  } else {
    numUser[j]=numUser[j];
  }

}
for(var j = 0; j<numUser.length; j++) {
  if(numUser[j] == testArray[0]) {
    results = 0
    break;
  } else {
    numUser[j]=numUser[j];
  }
}

finalResults = resultsArray[results];
console.log(finalResults)
