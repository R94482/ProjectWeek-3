//alert("JavaScript works!");
/*Kelee Smith
Project 3
term: 1312
*/


//Global variables



var hop = 3;
var time = 8;
var late;
var Drinks = ["Long Island", "Jack and Coke","Dirty Martini",
              "Flaming Margarita", "Glass of Wine", "Whiskey Sour"];
 
var json = {
    "buddies": [
                {"name": "Michelle"},
                {"name": "I"},
                {"name": "Scotty"},
                {"name": "Marty"},
                {"name": "Mike" }
               ]
};
var rounds = 5;
var myPeeps = ("my friends");
var feeling = ("Bad");
 





//This is where my procedure will go
var Weekday = function(answer) {
    
    if (answer   === "weekend" || answer === "Weekend") {
       
        console.log("I live for the weekends!");
        
    }else{
        
        console.log("I'm going to pay for this in the morning!");
        
    }
};



//function1 - includes array arugument, array propery, for loop, return

var friendsDrinks = function(array1){
    
    for (var i = 0, j = array1.length; i < j; i++){
        var data = array1[i]
        console.log ( data.name + " had a " + Drinks[i] + ".")
        
       
    
    };
    
    var tab = (array1.length);
    return tab
    
}





//Function 1


var stayLateFunc = function(maybe, hour){
    
    while (maybe === true && (hour = hour + 2) < 16) {
        
        console.log("It's " + hour + " o'clock!")
        console.log("I think I can stay a bit longer.")
        
        
        //while loop 
    }
    
    console.log("Whoa! It's " + hour + " o'clock!")
    console.log("I should have quit while I was ahead!")
    
    var shock = (hour - time)
    late = (20 - hour)
    return(shock);
};
      
 
 //retun array; conditional; nested conditional function3
 
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
 
 
 
 //whereToGo = party(hop)
 
 
 //console.log("We found our way to " + whereToGo + ".")
    
 
 var DD = function(array2){
    
   for (var i = 0, j = array2.length; i < j; i++) {
        
        var data = array2[i]
   
        console.log(data.name + " called a taxi to go home.");
        
        for (a = array2.length; a > 0; a--){
            
          console.log((array2.length+1-a) + " down, " + (a-1) + " to go.");
            
            //code
        }
        
        
    }
    console.log("It's been a long night.");
    console.log("I hope I don't sleep in tomorrow!");
    
}; //Ask about getting one return from nested loop per parent loop



  
 
//this is where my number function will go
var sleep = function(insomnia){
    
   for (insomnia = late; insomnia > 2; insomnia = (insomnia - 1)) {
    
        console.log("I still can't fall asleep!");
        console.log("I only have " + insomnia + " hours to sleep!");
        
    
        if (insomnia < 2) {
        
            var hangover = true
            //code
        } else {
        
        var hangover = false
    }
   
        
       
       
    }
    
    console.log("I can't fall uh... ZZZZZzzzzz")
   return(hangover)
    
};
   






//This is where my string function will go

var talk = function(string1, string2){
    
    var outCome = ("I wonder if " + string1 + " are doing " + string2 + " today.")
    
   return (outCome);
} 


//This is where my main code will go




myPrompt = prompt("Is it a weekday or weekend?", "Type weekday or weekend" ); //my propt for procedure
Weekday(myPrompt);//my procedure

 
night = confirm("Will you have a late night?"); //my confirm for boolean


var nightOut = friendsDrinks(json.buddies);
console.log ("We added " + nightOut + " drinks to our tab.");
console.log("Kara's here!");
json.buddies.push({"name": "Kara"});
Drinks.unshift("Jameson on the rocks")
console.log("Order another round!")


var nightContinues = friendsDrinks(json.buddies)
console.log ("We added " + nightContinues + " more drinks to our tab.") 


whereToGo = party(hop)
console.log("We found our way to " + whereToGo + ".")


var partyTime = stayLateFunc(night, time); //my boolean function
console.log("I can't believe I stayed out for " + partyTime + " hours!");


DD(json.buddies);



var wideAwake =  sleep(time);
console.log("It is " + wideAwake + " that I'll have a hangover when I wake up.");
    //boolean return




var nextDay = talk(myPeeps, feeling);
console.log(nextDay);
