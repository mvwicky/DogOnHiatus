$(document).ready(function(){
	for (var i = 0; i < articleArray.length; i++){
		if (articleArray[i].category == "stories"){
			addPreview(articleArray[i]);
		}
	}

	clickSlide();
})