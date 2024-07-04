$(document).ready(function(){
	//탑버튼
	$('.topBtn').bind('click', function(){
		$('html, body').animate({scrollTop: '0'}, 800);
	});
	
	/*필터&항목정렬&더보기&개수버튼&공유&페이지 버튼*/
	$(".down").click(function(){
		alert("아직 개발중인 영역입니다.")
	});
	$(".up").click(function(){
		alert("아직 개발중인 영역입니다.")
	});
	$("#share").click(function(){
		alert("아직 개발중인 영역입니다.")
	});
	$(".pageNum2").click(function(){
		alert("아직 개발중인 영역입니다.")
	});
	$("#title > div > span").click(function(){
		alert("아직 개발중인 영역입니다.")
	});
	$(".listView").click(function(){
		alert("아직 개발중인 영역입니다.")
	});
	$(".filter").click(function(){
		alert("아직 개발중인 영역입니다.")
	});
	$(".heart").click(function(){
		alert("아직 개발중인 영역입니다.")
	});
	
	/*장바구니 팝업*/
	$(".ShopBtn").click(function(){
		$("#popup").addClass("active");
	});
	$(".popBtn2").click(function(){
		$("#popup").removeClass("active");
	});
	
	/*탭메뉴 보이기(shop-product)*/
	$(".tabmenu > li a").click(function(){
		$(this).parent().addClass("active")
		.siblings().removeClass("active");
	});
	//컨텐츠 초기화
	$('.tabcontent').hide();
	$('#page').show();
	/*상품정보제공공시(shop-product)*/
	var cnt = 0;
	$(".icon").click(function(){
		cnt++;
		if(cnt %2 == 0 ){
			$(".subNavi").find(".submenu").slideDown(500);
			$(".icon").attr("src",'images/IconO/menu-up.png');
		}else{
			$(".subNavi").find(".submenu").slideUp(500);
			$(".icon").attr("src",'images/IconO/menu-dwon.png');
		}
	});
	
});

/*탭 메뉴 페이지*/
function opentab(evt, tabName) {
  evt.preventDefault();
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}