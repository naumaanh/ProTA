//pushes new course into courses array
function addStudent(student,id) {
	
	let course = [];
	
	let studentObj = JSON.parse('{ "name" : "' + student +'", "id" : "' + id.toString() +'" }');
	
	
	course.push(studentObj);
	//pro.course.courses.push( jsonObj );
	//return number of classes, should be equal to previous amount of classes plus 1?
	return course;
}
module.exports = addStudent;
