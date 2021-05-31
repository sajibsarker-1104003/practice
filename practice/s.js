class Person {
  constructor(x, y, z) {
    this.sajib = x;
    this.sarker = y;
    this.dob = z;
  }
  cal() {
    let birth = new Date(this.dob);
    let differ = Date.now() - birth.getTime();
    let agedate = new Date(differ);
    return Math.abs(agedate.getUTCFullYear() - 1970);
  }
  fullname() {
    console.log(this.sajib, this.sarker);
  }
  greeting() {
    return `Hllw ${this.sajib} ${this.sarker} ${this.dob}`;
  }

}
class Customer extends Person {
  constructor(x, y, z, m, n) {
    super(x, y, z);
    this.phone = m;
    this.membership = n;
  }
  static test() {
    console.log("i am a static person");
  }

}

let p1 = new Person("sajib", "sarker", "01-04-1997");
let p2 = new Person("santha", "sarker", "10-31-2002");
let p3 = new Person("sajib", "sarker", "01-04-1997");
let p4 = new Customer("sajib", "sarker", "01-04-1997", "01318390600", "1234");
console.log(p1.cal());
console.log(p1.fullname());
console.log(p2.cal());
console.log(p2.fullname());
console.log(p4.greeting());
console.log(p4.fullname());
console.log(Customer.test());