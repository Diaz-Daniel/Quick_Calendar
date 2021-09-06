



//Date and Time Display

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today);


//Function that applies color change every hour

var timeColor = function(){
var H = moment().hour('H');
console.log(H);

}