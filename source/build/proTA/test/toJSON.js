//converts html input box text into a JSON object
//since a lot of our functions combine interactions with the DOM, i've commented out those sections for testing purposes.
function toJSON(inputs) {
	//var inputs = $elem.closest('.popup').find('input');

	var jsonObj = {};
	inputs.forEach( function(input){
		jsonObj[ "courseName" ] = input;
	});

	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();

	jsonObj[ "time" ] = ( ( h < 10 ? "0" : '' ) +  h + ":" + ( m < 10 ? "0" : '' ) + m );

	//		pro.closePopup( $elem.closest('.popup') );
	//		pro.openPage( '#take-attendance' );
	return jsonObj;
}
module.exports = toJSON;
