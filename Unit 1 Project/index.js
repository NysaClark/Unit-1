console.log("Hello World");
console.log(3 + 5);
console.log("2"+ 2);
console.log("2"- 2);
console.log("2" + 2 - 2)

alert("YOU HAVE WON THE GRAND PRIZE");
alert("A VIRUS WILL INFECT YOUR COMPUTER IN 2 SECONDS");
alert("2");
alert("1");
alert("YOU HAVE A VIRUS")

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//confirm()
//confirm asks ok or cancel and returns the value
//true or false.

var choice = confirm("Do you like cake?");

if (choice == true){
    console.log("They like cake.");
}else{
    console.log("They are a monster.");
}

var choice = confirm("Do you like vanilla ice cream?");

if (choice == true){
    console.log("They like vanilla ice cream.");
}else{
    console.log("They don't like vanilla ice cream.");
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var score = 0;
var firstAnswer = prompt("What Coding Languageare are you using?");
var secondAnswer = prompt("Was the cake good?");
var thirdAnswer = prompt("Type 1");
var fourthAnswer = prompt("Do you like blue?");
var fifthAnswer = prompt("Type 2");
var sixthAnswer = prompt("2+2=?");
var seventhAnswer = prompt("1+1=?");
var eighthAnswer = prompt("1+0=?");
var ninthAnswer = prompt("Do you like chocolate?");
var tenthAnswer = prompt("0+0=?")

if(firstAnswer == "JavaScript"){
    score ++;
}
if(secondAnswer == "yes"){
    score ++;
}
if(thirdAnswer == "1"){
    score ++;
}
if(fourthAnswer == "yes"){
    score ++;
}
if(fifthAnswer == "2"){
    score ++;
}
if(sixthAnswer == "4"){
    score ++;
}
if(seventhAnswer == "2"){
    score ++;
}
if(eighthAnswer == "1"){
    score ++;
}
if(ninthAnswer == "yes"){
    score ++;
}
if(tenthAnswer == "0"){
    score ++;
}
console.log(score);
