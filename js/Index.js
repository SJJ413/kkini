$(document).ready(function(){
    // 탑 버튼
    $(".topBtn").bind("click", function(){
        $("html, body").animate({scrollTop: '0'}, 800);
    });
    // 무료 체험
    $("#trial").click(function(){
		alert('아직 개발중인 기능입니다.');
    }); 
	// 이미지슬라이드
	setInterval(function(){
		$("#slideList").animate({"marginLeft":"236px"}, function(){
			$("#slideList li:last-child")
                .css("opacity","0")
                .animate({"opacity":"1"}, 100)
                .prependTo("#slideList")
			$("#slideList").css({"marginLeft":"0"})
		})
	}, 1500);
    // 더 많은 이야기 보러가기
    $("#block2 h5").click(function(){
        $(location).attr("href", "Brand-story.html")
    });
    // 롤링 배너
    setInterval(function(){
		$("#bandTextBanner").animate({"marginLeft":"-1857px"}, 20000, 'linear', function(){
			$("#bandTextBanner img:last-child")
                .prependTo("#bandTextBanner")
			$("#bandTextBanner").css({"marginLeft":"0"})
		})
	}, 0);
    // 여름 배너
    $("#bandBanner").click(function(){
        $(location).attr("href", "Shop.html")
    });
    // 인기 및 신규반찬
    $("#bestAndNew > div:first").click(function(){
        $(location).attr("href", "Shop-product.html")
    });
    $("#bestAndNew > div:last-child").click(function(){
        $(location).attr("href", "Shop-product.html")
    });
    setInterval(function(){
        $("#bestAndNew > div:first > img").attr("src", "images/weeklyBest2.png");
        $("#bestAndNew > div:first > h4").text("마늘쫑 건새우볶음");
        $("#bestAndNew > div:first > p").text("아삭아삭 마늘쫑과 바삭바삭 건새우, 톡톡 터지는 참깨까지");
        $("#bestAndNew > div:last-child > img").attr("src", "images/new2.png");
        $("#bestAndNew > div:last-child > h4").text("두부김치");
        $("#bestAndNew > div:last-child > p").text("매콤달콤한 김치와 고소담백한 두부의 환상의 궁합");
    }, 2000)
    setInterval(function(){
        $("#bestAndNew > div:first > img").delay(2000).attr("src", "images/weeklyBest.png");
        $("#bestAndNew > div:first > h4").delay(2000).text("메추리알 꽈리고추 장조림");
        $("#bestAndNew > div:first > p").delay(2000).text("무항생제 메추리알과 신선한 꽈리고추의 달큰한 만남");
        $("#bestAndNew > div:last-child > img").delay(2000).attr("src", "images/new.png");
        $("#bestAndNew > div:last-child > h4").delay(2000).text("브로콜리 두부무침");
        $("#bestAndNew > div:last-child > p").delay(2000).text("비건인증 완료! 건강한 재료로 낼 수 있는 최대의 감칠맛");
    }, 4000)
    // 공지사항 및 이벤트
    $(".post").click(function(){
        $(location).attr("href", "Announce-post.html")
    });
    $(".more1").click(function(){
        $(location).attr("href", "Announce-notice.html")
    });
    $(".more2").click(function(){
        $(location).attr("href", "Announce-event.html")
    });
    // 리뷰 영수증 슬라이드
    $(".prevBtn").click(function(){
		alert('아직 개발중인 기능입니다.');
    }); 
    $(".nextBtn").click(function(){
		alert('아직 개발중인 기능입니다.');
    }); 
});