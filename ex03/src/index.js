class Person {
  static display() {
    return "Static method is invoked from Person class";
  }

  static show() {
    return console.log(this.display());
  }
}

var message = new Person();
message.show();
module.exports = Person;
