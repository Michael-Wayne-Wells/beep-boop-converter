numUser = ["3", "4", "5", "3", "5", "2", "1", "4"]
testArray = ['3', '2', '1']
results = ''
for(j = 0; j<numUser.length; j++) {
if(numUser[j] == testArray[0]) {
results = "I'm sorry Dave. I'm afraid I can't do that."
break;
} else if (numUser[j] == testArray[1]) {
results = "Boop!";
}else if (numUser[j] == testArray[2]) {
results = "Beep!"
} else {
numUser[j]=numUser[j];

}
console.log(numUser)
}
