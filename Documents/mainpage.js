function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}


$('document').ready(function(){
	var icon_page = 0;
	var icon_name = [];
	var icon_html = [];

	$.getJSON('icon_inf.json', function(data, status){  //정보 수집
		console.log(status);
		
		$.each(data, function(i, item){
			icon_name.push(item.name);
			icon_html.push(replaceAll(item.html, '&', '"'));
		})
		$('.logo').html(icon_html[icon_page]);
	});

	
	

	$('.arrow').click(function(){  //클릭시 이벤트
		var lr = $('.arrow').index(this);
		if(lr == 0)
			icon_page--;
		else
			icon_page++;
		icon_page%=4;
		if(icon_page == -1)
			icon_page=4;
		$('.logo').html(icon_html[icon_page]);
	});
})