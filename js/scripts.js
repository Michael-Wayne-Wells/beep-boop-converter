numUser = ["3", "4", "5", "3", "5332", "643", "231", "5332"]


for(i = 0; i<numUser.length; i++) {
if(numUser[i] == 3) {
numUser[i] = "I'm sorry Dave. I'm afraid I can't do that."
} else if (numUser[i] == 2) {
numUser[i] = "Boop!"
}else if (numUser[i] == 1) {
numUser[i] = "Beep!"
} else {
numUser[i]=numUser[i];

}
console.log(numUser)
}
