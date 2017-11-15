class Class {
  constructor (name, time) {
    this.name = name;
    this.time = time;
  }
  getTime() {
      console.log (this.time);
  }
}

let Class1 = new Class ("CSCE 4444", "11:00 AM");
Class1.getTime();
