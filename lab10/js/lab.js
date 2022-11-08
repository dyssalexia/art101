// Author : Alexia Jones
// Date: 11.03.22
// Email: aljujone@ucsc.edu

// Borrow the nameSort()function from Lab 7
function scrambleUserName(inputName) {
  var userName = inputName;

  var nameArray = userName.split('');

  var sortedArray = nameArray.sort();

  var sortedName = sortedArray.join("");

  return sortedName;
}
// Attach an event listener to your button that gets the value of the input field, Runs that value through your sort() or anagram() function and saves the results.

var buttonEl = document.getElementById("my-button");

var outputEl = document.getElementById("output");

buttonEl.addEventListener('click', function() {
  var inputName= document.getElementById("user-name").value
  var sortedName = scrambleUserName(inputName);
  outputEl.innerHTML = sortedName;
})
