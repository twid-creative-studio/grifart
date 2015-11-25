$(window).on('load', function () {
	$('.main-slider .back-img').addClass('active');
});

$(window).resize(function () {

});

$(document).ready(function(){

});

//Таймер
$(function(){
	
	var note = $('#note'),
		ts = new Date(2012, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}
			
			note.html(message);
		}
	});
	
});


//Placeholder
var oldPlaceholder = "";

$(document).on("focusin", "input,textarea", function(){
    oldPlaceholder = $(this).attr('placeholder');
    $(this).attr('placeholder',"");
    $(this).parents('.holder').addClass('active');
});

$(document).on("focusout", "input,textarea", function(){
    $(this).parents('.holder').removeClass('active');
    $(this).attr('placeholder',oldPlaceholder); 
});


$(document).on('click', '.btn-next-step', function(){
	$('.info').addClass('active');
	$('.form').addClass('active');
	$('.btn-back-step').addClass('active');
});

$(document).on('click', '.btn-back-step', function(){
	$('.info').removeClass('active');
	$('.form').removeClass('active');
	$('.btn-back-step').removeClass('active');
});