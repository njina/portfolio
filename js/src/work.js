//work.js
//포트폴리오 페이지


(function($){
	// jQuery 시작 
	
	//변수
	var win = $(window);

	// ---
	var contentBox = $('#contentBox');
	var contentArea = $('.content_area');




	//자동으로 포폴 목록 생성
	contentArea.append('<ul></ul>');
	var profolUl = contentArea.find('ul');

	var code = '<li>\
							<div class="title"><span class="siteNameKr"></span><br><span class="siteNameEn"></span></div>\
							<div class="img"><a href="#" target="_blank"></a></div>\
							</li>'
	
	//외부문서 불러오기
	$.ajax({
		url:"../data/portfolio.json",
		success:function(data){
		// console.log(data);
		var i = 0;
		var title, img, thumUrl;
		var LoadData = function(n){
			// if(n > 0){k=n} else {k=myView}
			// 바로 위 문장이 바로 아래 문장과 같은 뜻
			var k  = n || data.length;
			var j = i + k;
			for(; i < j ;i++){
				profolUl.append(code);
				title = $('.title');
				title.eq(i).find('.siteNameKr').text(data[i].nameKr);
				title.eq(i).find('.siteNameEn').text(data[i].nameEn);

				thumUrl = '../img/';
				img = $('.img');
				img.eq(i).find('a').attr('href', data[i].siteUrl);
				img.eq(i).css({backgroundImage:'url(' + thumUrl + data[i].imageUrl + ')'});
			};
		};
	
		LoadData();



		var pofolLi = profolUl.children('li');
		//애니메이션--------------------
		//배열에 offset값 담기
		var myScroll;
		var liOffset = [];
		var i = 0;
		for(; i < pofolLi.length ; i++){
			pofolLi = contentBox.find('li');
			liOffset[i] = pofolLi.eq(i).offset().top;
			// console.log(liOffset);
		}

		//하나씩 나타나기
		pofolLi.eq(0).addClass('active');

		win.on('scroll',function(e){
			myScroll = win.scrollTop();
			// console.log('myScroll:'+myScroll);
			
			for(var i = 0; i < pofolLi.length ; i++){
				if( myScroll+400 >= liOffset[i] ){
					pofolLi.eq(i).addClass('active');
				}
			} 
		});

	} //$.ajax.success
		//--//$.ajax
	});

	







	// jQuery 종료
})(jQuery);