function clean(text){
	var text = text.toLowerCase();
	text = text.replace(/[á]/, 'a');
	text = text.replace(/[é]/, 'e');
	text = text.replace(/[í]/, 'i');
	text = text.replace(/[ó]/, 'o');
	text = text.replace(/[ú]/, 'u');
	text = text.replace(/[ñ]/, 'n');
	return text;
}

function checkimage(search,good,bad){
	var img = new Image();
	img.onerror = bad;
	img.onload = good;
	img.src = search;
}

function lookup(){
	var search = 'img/' + clean(document.getElementById('text').value).trim() + '.png';
	if (search=='img/.png') document.getElementById('img').src = 'img/base.png';
	else 
		checkimage(search, 
	    	function good(){document.getElementById('img').src = search;}, 
	        function bad(){document.getElementById('img').src = 'img/noe.png';});
}

function lookup2(e){
	k = (document.all) ? e.keyCode : e.which;
	if(k == 13) lookup();
}

function help(){document.getElementById('img').src = 'img/help.png';}
