//Student Class
class Student {
  //name is needed to identify Student
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  checkIn(date){
    console.log("Student "+ this.name + " just checked in on " + date);
  }

}

//instance of Student class
//let Student1 = new Student("James Taylor");
//Student1.checkIn("11-14-17");