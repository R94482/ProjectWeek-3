//alert("JavaScript works!");
/*Kelee Smith
Project 3
term: 1312
*/

/*
//Global variables

  */

var hop = 3
var time = 7; 
/*
var Drinks = ["Long Island", "Jack and Coke","Dirty Martini", "Flaming Margarita", "Glass of Wine", "Whiskey Sour"];

var buddies = [ "Michelle", "I","Scotty", "Marty", "Mike" ];
 
var rounds = 5
  







//This is where my procedure will go
var Weekday = function(answer) {
    
    if (answer   === "weekend" || answer === "Weekend") {
       
        console.log("I live for the weekends!");
        
    }else{
        
        console.log("I'm going to pay for this in the morning!");
        
    }
};

    */
/*
//function1 - includes array arugument, array propery, for loop, return
var friendsDrinks = function(array1){
    
    for (var i = 0, j = array1.length; i < j; i++){
        console.log (array1[i] + " had a " + Drinks[i] + ".")
        
       
    
    };
    
    var tab = (array1.length);
    return tab
    
}



var nightOut = friendsDrinks(buddies)

console.log ("We added " + nightOut + " drinks to our tab.") 
    
console.log("Kara's here!")
buddies.push("Kara")
Drinks.unshift("Jameson on the rocks")
console.log("Order another round!")

var nightContinues = friendsDrinks(buddies)

console.log ("We added " + nightContinues + " more drinks to our tab.") 

 /*

//Function 1


var stayLateFunc = function(maybe, hour){
    
    while (maybe === true && (hour = hour + 2) <= 16) {
        
        console.log("It's " + hour + " o'clock!")
        console.log("I think I can stay a bit longer.")
        
        
        //while loop 
    }
    
    console.log("Oh wow! It's " + hour + " o'clock!")
    console.log("I should have quit while I was ahead!")
    
    var shock = (hour - time)
    return(shock);
};
       */
 
 var party = function(bars){
    
  if (bars<= 5) {
    
    var pubCrawl = ["Cabo Cantina", "Sharkey's", "The Rusty Mullet", "Pink Taco", "Lucky Devil",
                  "Molly Malone's"]
    
    
    if (pubCrawl.length === time) {
        
        console.log("We went to a new bar every hour!")
       
    }else{
        
        console.log("We went to " + pubCrawl.length + " different bars in one night!")
    }
  
  }else{
  
   var pubCrawl = ["Some seedy bar", "a biker bar", "a goth bar"]
 
    console.log("We were feeling adventurous!")
    
  }
    return(pubCrawl)

  
    
   
    
};
 
 
 
 whereToGo = party(hop)
 
 
 console.log("We found our way to " + whereToGo + ".")
 
  /*
 
 
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

console.log("I can't believe I stayed out for " + partyTime + " hours!");
 */
/*
var wideAwake =  sleep(time);

console.log(wideAwake);


var nextDay = talk(friend1, friend2);
console.log(nextDay);
*/