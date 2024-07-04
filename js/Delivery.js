$(document).ready(function(){
	/*트럭 애니메이션*/
	let cnt = 1;
	setInterval(function() {
		if(cnt <= 4){
			$(".move").animate({"marginLeft": (170 * cnt) + "px"});
			cnt++;
		} else {
			$(".move").animate({"marginLeft": "0px"});
			cnt = 0;
		}
	}, 3000);
});
/*배송날짜 안내&트럭바 애니메이션*/
const comment = document.getElementById("comment");
const message = [
	"주문하신 상품이 배송 준비 중이예요!",
	"주문하신 상품이 집하되고 있어요!",
	"주문하신 상품이 출발했어요!",
	"주문하신 상품이 배송되고 있어요!",
	"주문하신 상품이 도착했어요!"
];

const bar = document.getElementById("Bar");
const width = [100, 260, 440, 620, 910];

let cnt = 1;

setInterval(function(){
	if(cnt <= 4) {
		comment.innerHTML = message[cnt];
		bar.style.width = width[cnt] + "px";
		cnt++;
	} else {
		comment.innerHTML = message[0];
		bar.style.width = width[0] + "px";
		cnt = 0;
	}
}, 3000);