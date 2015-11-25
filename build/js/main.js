

$(window).on('load', function () {

	
});

$(window).resize(function () {

	
	
});


$(document).ready(function(){

	RotateCarousel(1);
	RotateCarousel(2);
	RotateCarousel(3);
	RotateCarousel(4);
	RotateCarousel(5);
	RotateCarousel(6);
	RotateCarousel(7);


});



$('ul li:even').addClass('even');
$('ul li:odd').addClass('odd');

//setTimeout(RotateCarousel, 1500);

function RotateCarousel(num) {  
    $("#slider_" + num + " ul li:first-child").animate({ 'marginTop': - 270 }, 30000, 'linear', function () {
        $("#slider_" + num + " li:first-child").appendTo('#slider_' + num + ' ul');
        $("#slider_" + num + " li:last-child").css('margin-top', 30);
        RotateCarousel(num);
    });
}
