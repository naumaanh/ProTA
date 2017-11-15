$(document).ready(function(){ // document ready event occurs after the DOM has been loaded making it a great place to have your jQuery

	$(".icon-plus").click(function() {
		console.log ( $(".class-add" ).val() );
	});


	//retrieve search text
	$("#searchbox").keypress(function(e){

		if(e.which == 13) {
			let mytext = $(this).val();

			console.log(mytext);
		}
	})

});
