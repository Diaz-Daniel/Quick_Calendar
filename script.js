
//Date and Time Display

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today);

//variable and function for getting current hour
var currentHour;
var questionIndex = 0;


var timeColor = function(){
currentHour = moment().hour();
console.log(currentHour);
}

timeColor();

//past present and future
var pst = $('.past');
var prsnt = $('.present');
var futr = $('.future');


//assigning id of every input box to a letter
var A = 9;
var B = 10;
var C = 11;
var D = 12;
var E = 13;
var F = 14;
var G = 15;
var H = 16;
var I = 17;

var a = $('#9am');
var b = $('#10am');
var c = $('#11am');
var d = $('#12pm');
var e = $('#13pm');
var f = $('#14pm');
var g = $('#15pm');
var h = $('#16pm');
var i = $('#17pm');


var hours =[
    {
        time: [A,B],
        color: [a,b]
    }

]
// console.log(hours.color[0]);

function colorCheck(){
var currentTextbox = hours[questionIndex];

for (i= 0; i < currentTextbox.time.length; i++){

        if (currentTextbox.time[i] < currentHour){
            console.log("past");

            
        }else if(currentTextbox.time[i] > currentHour){
            console.log('future')    
        }else{
            console.log('present')
        }
    }
}
colorCheck();

//SAVE IN CASE YOU NEED TO START AGAIN

// Variables for past, present, future
// var pst = $('.past');
// var prsnt = $('.present');
// var futr = $('.future');

// var a = $('#9am');
// var b = $('#10am');
// var c = $('#11am');
// var d = $('#12pm');
// var e = $('#13pm');
// var f = $('#14pm');
// var g = $('#15pm');
// var h = $('#16pm');
// var i = $('#17pm');

// //assing each letter a value
// var A = 9;
// var B = 10;
// var C = 11;
// var D = 12;
// var E = 13;
// var F = 14;
// var G = 15;
// var H = 16;
// var I = 17;


// //put variables in an array
// var ibHours = [A,B];

// //test function
// for (i= 0; i < ibHours.length; i++){
//     if (ibHours[i] < currentHour){
//         console.log("past");
//     }else if(ibHours[i] > currentHour){
//         console.log('future')    
//     }else{
//         console.log('present')
//     }
// }
// console.log(typeof ibHours[0]);
// console.log(typeof currentHour);