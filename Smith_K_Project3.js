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






//This is where procedure 1 will go. Included: confirm, boolean logic
var Weekday = function(answer) {
    
    if (answer   === "weekend" || answer === "Weekend") {
       
        console.log("I live for the weekends!");
        
    }else{
        
        console.log("I'm going to pay for this in the morning!");
        
    }
};




//function1 - includes array arugument, array propery, for loop, return number
var friendsDrinks = function(array1){
    
    for (var i = 0, j = array1.length; i < j; i++){
        var data = array1[i]
        console.log ( data.name + " had a " + Drinks[i] + ".")
        
       
    
    };
    
    var tab = (array1.length);
    return tab
    
}



//Function2 - includes: boolean argument, number argument, while loop, boolean logic
//number return, global variable, math
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
      

 
 
 //Function3 - includes: retun array; conditional; nested conditional
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
 


                 
 //Procedure2 - includes: json data, nested loop (has error)  
 var DD = function(array2){
    
   
   for (var i = 0, j = array2.length, math = 1; i < j; math ++) {
        
        var data = array2[i];
   
        console.log(data.name + " called a taxi to go home.");
        console.log((i+1) + " down, " + (j - math) + " to go.");
        
        if ((i % 2) > 0) {
            
            i++;
          
        }else{
        
          while ( i % 2 <= 0 ) {
            
            console.log (data.name + " has a long way to go home.");
            
            i++;
            
             };
            
        };
        
        
    };
    
    console.log("I can't wait to fall in my bed!");
    console.log("It's been a long night.");
    console.log("I hope I don't over-sleep tomorrow!");
    
}; //Ask about getting one return from nested loop per parent loop

  
  
 
//Function4 - includes: for loop, boolean return
var sleep = function(insomnia){
    
   for (insomnia = late; insomnia > 2; insomnia = (insomnia - 1)) {
    
        console.log("I still can't fall asleep!");
        console.log("I only have " + insomnia + " hours to sleep!");
        
    
        if (insomnia < 2) {
        
            var hangover = true
            //code
        } else {
        
        var hangover = false
    };
   
        
       
       
    };
    
    console.log("I can't fall uh... ZZZZZzzzzz...ZZZZZZzzzz...");
    return(hangover);
    
};
   



//Function5 - includes: string return
var talk = function(string1, string2){
    
    var outCome = ("I wonder if " + string1 + " are doing " + string2 + " today.")
    
   return (outCome);
} 





//Main code - includes: start, finish, returned values, output

//prompt1
myPrompt = prompt("Is it a weekday or weekend?", "Type weekday or weekend" ); //my propt for procedure
Weekday(myPrompt);//procedure1


 //boolean argument
night = confirm("Will you have a late night?"); //my confirm for boolean


//json data/array argument
var nightOut = friendsDrinks(json.buddies);
console.log ("We added " + nightOut + " drinks to our tab."); //return number
console.log("Kara's here!");
json.buddies.push({"name": "Kara"}); //array method
Drinks.unshift("Jameson on the rocks"); //array method
console.log("Order another round!");


//json data/array argument
var nightContinues = friendsDrinks(json.buddies);
console.log ("We added " + nightContinues + " more drinks to our tab.") ; //return number


//number argument
var whereToGo = party(hop)
console.log("We found our way to " + whereToGo + "."); //return array


//boolean argument/number argument
var partyTime = stayLateFunc(night, time); //my boolean function
console.log("I can't believe I stayed out for " + partyTime + " hours!"); //return number


DD(json.buddies); //procedure2


var wideAwake =  sleep(time);
console.log("It is " + wideAwake + " that I'll have a hangover when I wake up.");
    //return boolean


//string arguments
var nextDay = talk(myPeeps, feeling);
console.log(nextDay); //return string
