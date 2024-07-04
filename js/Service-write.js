$(document).on("click","#removeBtn", function(){
 
    $("#popup2").show();
    $("body").css("overflow", "hidden");

  
  $(".btnst input[type=button]:first-child").click(function(){
		$("#popup2").hide();
    $("body").css("overflow", "visible");
  });
  
  $(".btnst input[type=button]:last-child").click(function(){
		$(location).attr("href", "Service-support.html")
  });
  
 
  /*
  $("#cancleBtn").click(function(){
		console.log("취소 - 예");
		$(location).attr("href", "Service-support.html")
  });*/
});
$(document).on("click", "#moveBtn", function(){

    $("#popup").show();
    $("body").css("overflow", "hidden");

  $(".btns input[type=button]:first-child").click(function(){
		$("#popup").hide();
    $("body").css("overflow", "visible");
  });
  $(".btns input[type=button]:last-child").click(function(){
		$(location).attr("href", "Service-write-completed.html")
  });
});