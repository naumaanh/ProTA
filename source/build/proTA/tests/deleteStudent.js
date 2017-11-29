//pushes new course into courses array
function deleteStudent(student,id) {
	
	var courses = [{'name':"James",'id': "456852"}];
	var i = 0;
	
	courses.forEach(function(student_in_course){
		
		//console.log(student_in_course.name);
		
		if(student_in_course.id == id){	//check student ID
				courses.splice(i,1);
		}
		
		i++;	//remove at the correct index
	});
	
	return courses;
}
module.exports = deleteStudent;
