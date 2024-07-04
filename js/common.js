$(document).ready(function(){
    $("#logo").click(function(){
        $(location).attr("href", "Index.html")
    });
    $("#menu > li:first-child").click(function(){
        $(location).attr("href", "Brand-story.html")
    });
    $("#menu > li:nth-child(2)").click(function(){
        $(location).attr("href", "Shop.html")
    });
    $("#menu > li:nth-child(3)").click(function(){
        $(location).attr("href", "Announce-notice.html")
    });
    $("#menu > li:last-child").click(function(){
        $(location).attr("href", "Service-faq.html")
    });
    $("#menu_small > li:first-child").click(function(){
        $(location).attr("href", "Cart-list.html")
    });
    $("#menu_small > li:nth-child(2)").click(function(){
        $(location).attr("href", "Signup.html")
    });
    $("#menu_small > li:last-child").click(function(){
        $(location).attr("href", "Login.html")
    });
});