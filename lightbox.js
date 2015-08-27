$(document).ready(function(){
	$(".lightbox-link").click(function(e){
		
		

		$link_element = $(e.currentTarget);
		var image = $link_element.data("img-url");

		$('#lb-image').attr('src', image);


		$('.lightbox-outer').show();

		$(".lightbox-outer, .lightbox-inner, .lightbox-inner img").click(function(){
					
				$(".lightbox-outer").hide();
		});

	});
});