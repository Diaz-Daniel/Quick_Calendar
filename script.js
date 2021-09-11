$(".saveBtn").on("click", function(){
    var text=  $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');

    //need to save text and hour into localStorage
    localStorage.setItem(hour, text);


});


function hourStyle(){
    var returnHour = moment().hours();
    console.log(returnHour);
    
    $('.time-block').each(function(){
        var hourBlock = parseInt($(this).attr('id'))
        console.log(hourBlock)
        if(hourBlock < returnHour){
            $(this).addClass("past");
        }else if (returnHour === hourBlock){
            $(this).removeClass("past")
            $(this).addClass("present")
        }else{
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
            
        }
    })
}

hourStyle();

$("#10 .description").val(localStorage.getItem(key));

$('#currentDay').text(moment().format('MMM Do YYYY'));