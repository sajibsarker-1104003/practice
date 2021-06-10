/*document.getElementById("get_data").addEventListener('click', getData);
function getData() {
  //calling fetch api//
  fetch('http://api.icndb.com/jokes/random/')//fetch api called//
    .then(function (res) {
      return res.json;//return json data//
    })
    .then(function (data) {//this function accepts data//
      console.log(data);
    })
    .catch(function (err) {//if catch any error//
      console.log(err);
    })

}*/
//shortest  Techniques//
document.getElementById("get_data").addEventListener('click', getData);
// xhr.open('GET', 'http://api.icndb.com/jokes/random/', true);

// Arrow Function

function getData() {
  fetch('http://api.icndb.com/jokes/random')
    .then(res => res.json())
    .then(data => { console.log(data); })
    .catch(err => { console.log(err); })
}