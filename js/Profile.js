$(document).ready(function(){
  $("#editBtn").click(function(){
    $("#popup").show();
    $("#popup input[type=password]").focus();
    $("body").css("overflow", "hidden");
  });
  $(".btns input[type=button]:first").click(function(){
		$("#popup").hide();
    $("body").css("overflow", "visible");
  });
  $(".btns input[type=button]:last-child").click(function(){
		$(location).attr("href", "Profile-edit.html")
  });
});