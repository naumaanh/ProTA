//Student Class
class Teacher {
  //name is needed to identify Student
  constructor(name) {
    this.name = name;
  }
  
  newClass(){
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

Teacher1.newClass();