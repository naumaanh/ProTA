//pushes new course into courses array
function addCourse(courseName) {


	//actual
	div = div ? div : this;
	var jsonObj = pro.toJSON( div );
	pro.course.courses.push( jsonObj );
	$('.page').data(pro.course.courses);
	localStorage.setItem( "courses", JSON.stringify( jsonObj ) );


	//return number of classes, should be equal to previous amount of classes plus 1?




}
module.exports = addCourse;
