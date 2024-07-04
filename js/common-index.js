$(function(){
    var $header = $('header'); //헤더를 변수에 넣기
    var $window = $(window);
    var pageOffsetTop = $header.offset().top;//색상 변할 부분의 top값 구하기
    
    $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
        pageOffsetTop = $header.offset().top;
    });
    
    $window.on('scroll', function(){ //스크롤시
        var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
        $header.toggleClass('down', scrolled); //클래스 토글
    });
});
$(document).ready(function(){
    $("#logo").click(function(){
        $(location).attr("href", "Index-login.html")
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
        $(location).attr("href", "Purchase-history.html")
    });
    $("#menu_small > li:nth-child(3)").click(function(){
        $(location).attr("href", "Profile.html")
    });
    $("#menu_small > li:last-child").click(function(){
        $(location).attr("href", "Index.html")
    });
});