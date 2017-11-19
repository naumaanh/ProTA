// document ready event occurs after the DOM has been loaded making it a great place to have your jQuery
$(document).ready(function(){

	$(".icon-plus").click(function() {
		console.log ( $(".class-add" ).val() );
	});

	//retrieve search text
	$("#searchbox").keypress(function(e){

		if(e.which == 13) {	//enter key
			let mytext = $(this).val();
			console.log(mytext);

			//now we can make a new class for the new class
			var newClass = new Class(mytext);
			newClass.ready();

			//add it to our array of teacher classes
			Teacher1.addClass(newClass);

		}
	});

	//same thing as above but using click plus sign icon, instead of enter button
	$("#addClass").click(function(){
		let mytext = $("#searchbox").val();
		console.log(mytext);

		//now we can make a new class for the new class
		var newClass = new Class(mytext);
		newClass.ready();

		//add it to our array of teacher classes
		Teacher1.addClass(newClass);
	});




});
