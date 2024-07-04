$(document).ready(function(){
	$("#loginContents span").click(function(){
		alert('아직 개발중인 기능입니다.');
  });
  $("input[type=button]").click(function(){
    $(location).attr("href", "Index-login.html")
  });
  $(".joinBtn").click(function(){
    $(location).attr("href", "Signup.html")
  });
  $("#loginContents > img").click(function(){
		alert('아직 개발중인 기능입니다.');
  });
});