//Student Class
class Student {
  //name is needed to identify Student
  constructor(name,id) {
    this.name = name;
    this.id = id;
  }
  
  checkIn(){
    console.log("Student "+ this.name + " just checked in.");
  }

}


//instance of Student class
let Student1 = new Student("Mr. Price");

Student1.newClass();