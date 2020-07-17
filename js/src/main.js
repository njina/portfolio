// main.js
// 개인 포트폴리오 사이트
// 메인페이지

(function($){
// jQuery 시작


var contentBox = $('#contentBox');
var greeting_area = $('.greeting_area');

//한글자씩 나타나기---------------
var greetingText = $('.greeting_text');
var gText = greetingText.text().trim();
// console.log(gText);

greetingText.empty();

var gArr = gText.split('');


(function(){
	var i = 0;
	var textGo;
	var StartText = function(){
		textGo = setInterval(
		function(){
			//한글자씩 나타나게
			if( i < gArr.length ){
				greetingText.append( '<span>' + gArr[i] + '</span>' );
				greetingText.find('span').eq(11).nextAll().css({color:'#fa3'});
			} else {
				clearInterval(textGo);
			}
			i+=1;
		},100);
	};
	StartText();
})();









// jQuery 종료
})(jQuery);