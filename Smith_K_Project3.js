//alert("JavaScript works!");
/*Kelee Smith
Project 3
term: 1312
*/


//Global variables
var function(1);
var function(2);
var function(3);
var Drinks["Long Island", "Jack and Coke", "Flaming Margarita", "Glass of Wine", "Whiskey Sour"]
var Friends["Michelle", "Scotty", "Marty", "Mike"]
 
 //Global variables

var time = 7;

 

//This is where my procedure will go
var Weekday = function(answer) {
    
    if (answer   === "weekend" || answer === "Weekend") {
       
        console.log("I live for the weekends!");
        
    }else{
        
        console.log("I'm going to pay for this in the morning!");
        
    }
};

//Function 1


var stayLateFunc = function(maybe, hour){
    
    while (maybe === true && (hour = hour + 2) <= 16) {
        
        console.log("It's " + hour + " o'clock!")
        console.log("I think I can stay a bit longer.")
        
        
        //while loop 
    }
    
    console.log("I can't believe it's " + hour + " o'clock!")
    console.log("I should have quit while I was ahead!")
    
    var shock = (hour - time)
    return(shock);
};


//this is where my number function will go
var sleep = function(insomnia){
    
   for (insomnia = time; insomnia > 1; insomnia = insomnia - 3) {
   
        //console.log("I can't fall asleep!");
        //console.log("I only have " + insomnia + " hours to sleep!");
        var speak = ("I can't fall asleep! I only have " + insomnia + " hours until my alarm!");
        //this is my for loop
    }
    
    var passOut = (" One sheep... two sheep... ZZZZZZzzzzz...");
    
    return(speak + passOut);
    
};

//This is where my string function will go

var talk = function(string1, string2){
    
    var hangover = ("I hope " + string1 + " and " + string2 + " are doing better than me.")
    
   return hangover;
} 


//This is where my main code will go

myPrompt = prompt("Is it a weekday or weekend?", "Type weekday or weekend" ); //my propt for procedure

Weekday(myPrompt);//my procedure


night = confirm("Will you have a late night?"); //my confirm for boolean

var partyTime = stayLateFunc(night, time); //my boolean function

console.log(partyTime);


var wideAwake =  sleep(time);

console.log(wideAwake);


var nextDay = talk(friend1, friend2);
console.log(nextDay);
