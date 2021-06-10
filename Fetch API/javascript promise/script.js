let persons = [
  {
    fName: "sajib", lName: "sarker"
  },
  {
    fName: "santha", lName: "sarker"
  }
]
function createPerson(person) {//change in callback function replacing promise//
  /*setTimeout(function () {
    persons.push(person);
    callback();
  }, 2000);*/
  let prom = new Promise(function (resolve, reject) {
    persons.push(person);
    resolve();//this promise will keep in this function//
  });
  return prom;//return prom function//
}
function getPerson() {
  setTimeout(function () {
    let output = '';
    persons.forEach(function (person) {
      output += `<li> ${person.fName} ${person.lName}`
    });
    document.getElementById('output').innerHTML = output;

  }, 500)
}
createPerson({ fName: "pranto", lName: "sarker" })
  .then(getPerson);//main function of promise//