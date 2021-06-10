/*setTimeout(function () {//this function runs late
  console.log("hello");
}, 2000);*/  //timelimit in milli second
let persons = [
  { firstName: "Sajib", lastName: "Sarker" },
  { firstName: "Santha", lastName: "Sarker" }
]

function createPerson(person, callback) {
  setTimeout(function () {
    persons.push(person);
    callback();
  }, 2000);
}

function getPerson() {
  setTimeout(function () {
    let output = '';
    persons.forEach(function (person) {
      output += `<li>${person.firstName} ${person.lastName}</li>`
    });
    document.getElementById('output').innerHTML = output;
  }, 500);
}

createPerson({ firstName: "Pranto", lastName: "Sarker" }, getPerson);
