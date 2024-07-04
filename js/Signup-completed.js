$(document).ready(function(){
    $("input[type=button]:first").click(function(){
		$(location).attr("href", "Shop.html")
    });
    $("input[type=button]:last-child").click(function(){
		$(location).attr("href", "index.html")
    });
});