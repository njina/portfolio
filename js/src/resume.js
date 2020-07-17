// resume.js
// 개인 포트폴리오 사이트
// 소개 페이지

(function($){
// jQuery 시작

var win = $(window);

//스크롤 시 기능 ===============================
var contentBox = $('#contentBox');
var contentArea = contentBox.find('.content_area');
var infoDiv = contentArea.children('div');

var myScroll;
var infoDivOff = [];
for(var i = 0 ; i < infoDiv.length ; i++){
	infoDiv = contentArea.children('div');
	infoDivOff[i] = infoDiv.eq(i).offset().top;
	// console.log(infoDivOff)
}

infoDiv.eq(0).find('span').addClass('active');


// ===============================

// 그래프===============================
var myGraph = function(x,y,p,s){
	var canvas = document.querySelector('.skill_graph');
	var ctx = canvas.getContext('2d');
	
	//꾸미는 속성
	var keyColor = '#fa3';
	ctx.strokeStyle = keyColor;
	ctx.fillStyle = '#fff';
	ctx.lineWidth = 10;
	ctx.font = 'bold 1.5rem sans-serif';
	ctx.textAlign = 'center';
	ctx.lineCap = 'round';
	
	//본격적으로 도형 만들기
	var circleGraph;
	var posX = x;
	var posY = y;
	var percent = p;
	var skill = s || 'program';
	//--//var

	var ani;
	var i = 0;
	var myPercent = function(per){
		var p;
		if(per == 100){
			p = -0.5
		}else{
			p = ((100-per)/100*2) + 3.5;
		}
		return Math.PI * p;
	};


	circleGraph = function(){
		ani = function(percent){
			var lineWidth = 20;
			var r = 80;
			var rect = (r + lineWidth) * 2 + 10;
			ctx.lineWidth = lineWidth;

		

			ctx.clearRect(posX - (rect/2), posY - (rect/2), rect, rect+150);

			ctx.beginPath();
			ctx.arc(posX, posY, r, Math.PI*1.5, myPercent(percent), true);
			ctx.stroke();
			ctx.textAlign = 'center';
			ctx.fillstyle = keyColor;
			
			ctx.font = 'normal 2rem sans-serif';
			ctx.fillText(skill, posX, posY+140);
			
			ctx.font = 'bold 2.5rem sans-serif';
			ctx.fillText(percent + '%', posX, posY+15);

		};
		i += 1;
		ani( i );
		
		if( i < percent){		
			requestAnimationFrame(circleGraph);
		}else{
			cancelAnimationFrame(circleGraph);	
		}
	};
	circleGraph();
};






var canvasOff = $('.skills').offset().top;
var gauge = true; //그래프 애니메이션 한번만 수행하도록하기
win.on('scroll',function(e){
	myScroll = win.scrollTop();
	
	for(var i = 0 ; i < infoDiv.length ; i++){
		if( myScroll+600 >= infoDivOff[i] ){
			infoDiv.eq(i).find('span').addClass('active');
		}
	}

	// canvas 기능수행

	if( myScroll+600 >= canvasOff && gauge ){
		gauge = false;
		myGraph(90,90,70,'HTML');
		myGraph(310,90,70,'CSS');
		myGraph(530,90,55,'jQuery');
		myGraph(750,90,60,'SCSS');

		myGraph(90,390,90,'Illustrator');
		myGraph(310,390,80,'Photoshop');
		myGraph(530,390,90,'Indesign');
	} else {
		cancelAnimationFrame( myGraph );	
	}
});






// jQuery 종료
})(jQuery);