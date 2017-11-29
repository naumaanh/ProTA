//pushes new course into courses array
function getStudentSemester(student_name,id) {

	//dummy student info
	var courses = [
		{
			'name':"James",
			'id': "456852",
			'checkins' : [
				{
				"time" : "3:30pm",
				"day" : "Monday"
				},
				{
				"time" : "3:25pm",
				"day" : "Wednesday"
				}
		]
		}];
	
	
	var checkins = []

	courses.forEach(function(student_in_course){


		if(student_in_course.id == id){	//check student ID
			checkins = student_in_course.checkins;

		}
	});

	return checkins;
}
module.exports = getStudentSemester;
