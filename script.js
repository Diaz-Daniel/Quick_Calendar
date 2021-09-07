
//Date and Time Display

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today);

// Variables for past, present, future
var pst = $('.past');
var prsnt = $('.present');
var futr = $('.future');

//assigning id of every input box to a letter
var a = $('9am');
var b = $('10am');
var c = $('11am');
var d = $('12pm');
var e = $('13pm');
var f = $('14pm');
var g = $('15pm');
var h = $('16pm');
var i = $('17pm');

//assing each letter a value
var a = 9;
var b = 10;
var c = 11;
var d = 12;
var e = 13;
var f = 14;
var g = 15;
var h = 16;
var i = 17;

//put variables in an array
var ibHours = [a,b,c,d,e,f,g,h,i];

//check that values are stored
console.log(ibHours);


///Text Box color change based on hour

//This function is to get the current hour
var currentHour;
var timeColor = function(){
var currentHour = moment().hour();
console.log(currentHour);

// var d = 9;


// if(d < currentHour){
//     $('input#9am').removeClass('present');
//     $('input#9am').addClass('future');
// }
}
timeColor();
