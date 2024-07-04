$(document).ready(function(){
	//탑버튼
	$('.topBtn').bind('click', function(){
		$('html, body').animate({scrollTop: '0'}, 800);
	});
});