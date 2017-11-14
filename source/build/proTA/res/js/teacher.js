class Teacher {
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


//instance of teacher class
let teacher1 = new Teacher("Mr. Price");

teacher1.newClass();