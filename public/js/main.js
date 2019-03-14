$("form").on('submit', function (e) {
	e.preventDefault();
});
function someImage() {
	var image_holder = $("#image-holder");
	image_holder.removeClass('mt-md-5');
	image_holder.addClass('mt-md-2');
	image_holder.removeClass("bg-light");	
	image_holder.removeClass('border');
	image_holder.css({'min-height': '0rem'});
	image_holder.empty();
}
function noImage() {
	var image_holder = $("#image-holder");
	image_holder.addClass('mt-md-5');
	image_holder.addClass("bg-light");	
	image_holder.addClass('border');
	image_holder.empty();
	image_holder.html('<span class="d-inline-block mt-5 text-muted">Uploaded Image will be displayed here..</span>');
	image_holder.css({'min-height': '15rem'});
}
noImage();
$("#file").on('change', function() {
	var image_holder = $("#image-holder");
	var desc = $("form textarea").val();
	if(desc != '')
	{
		console.log('there');
		$("#description-holder").find('span').html(desc);
	}
	else
	{
		console.log('here');
		$("div#description-holder").find('span').html("Description....");
	}
	//Get count of selected files
	var countFiles = $(this)[0].files.length;
	if(countFiles == 0)
		noImage();
	var imgPath = $(this)[0].value;
	var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
	if (extn == "png" || extn == "jpg" || extn == "jpeg") 
	{
		var filename = $('input[type=file]').val().split('\\').pop();
		$('div.custom-file').find('label').html(filename);
		if (typeof(FileReader) != "undefined") {
			someImage();
		//loop for each file selected for uploaded.
			for (var i = 0; i < countFiles; i++) 
			{
				var reader = new FileReader();
				reader.onload = function(e) {
					$("<img />", {
						"src": e.target.result,
						"class": "img-fluid"
					}).appendTo(image_holder);
				}
				image_holder.show();
				reader.readAsDataURL($(this)[0].files[i]);
			}
		} else {
			$('div.custom-file').find('label').html('Choose Image...');
			noImage();
		}
	} 
	else {
		$('div.custom-file').find('label').html('Choose Image...');
		noImage(image_holder);
	}
	//$("div#caption-holder").find('span').html("Description....");
});
$("#file").on('change', function (argument) {
	
});