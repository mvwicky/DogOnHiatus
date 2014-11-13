$(document).ready(function(){
	for (var i = 0; i < articleArray.length; i++){
		if (articleArray[i].category == "baseball"){
			addPreview(articleArray[i]);
		}
	}

	clickSlide();
})