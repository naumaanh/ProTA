//Teacher Class
class Teacher {

	//name is needed to identify Student
	constructor(name) {
		this.name = name;
		this.classes = [];	//array to push class objects into
	}

	addClass(newclass){
		this.classes.push(newclass);

		//print teacher1's classes
		console.log(Teacher1.classes);

		console.log("new class created for "+ this.name);
	}

	addGrades(){
		console.log("grades added");
	}

	getAnalytics(){
		console.log("view")
	}
}

//instance of Student class
let Teacher1 = new Teacher("Mr. Price");

