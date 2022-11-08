// Author : Alexia Jones
// Date: 11.03.22
// Email: aljujone@ucsc.edu



// Find div ids and append a button to each id.
$("#challenges").append("<button id='challengesButton'>CHANGE IT UP</button>");

$("#problems").append("<button id='problemsButton'>CHANGE IT UP</button>");

$("#results").append("<button id='resultsButton'>CHANGE IT UP</button>");


//Establish an event listener for a click that changes the css of the divs from before.
$("#challengesButton").click(function(){
  $(this).parent().toggleClass("special");
})

$("#problemsButton").click(function(){
  $(this).parent().toggleClass("special");
})

$("#resultsButton").click(function(){
  $(this).parent().toggleClass("special2");
})
