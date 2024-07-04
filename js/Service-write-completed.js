$(document).ready(function(){
    $("input[type=button]:first").click(function(){
		$(location).attr("href", "Service-support.html")
    });
    $("input[type=button]:last-child").click(function(){
		$(location).attr("href", "index.html")
    });
});