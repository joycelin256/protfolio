// JavaScript Document
$(document).ready(function () {
	$('.record-item').click(function () {
		$(this).next('.record-detail').slideToggle().siblings('.record-detail').slideUp();
		$(this).find('.slide-down').toggleClass('active').parent().parent().parent().siblings().find('.slide-down').removeClass('active');
	});

});