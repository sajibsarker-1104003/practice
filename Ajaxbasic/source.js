/*document.getElementById('get_data').addEventListener('click', loaddata);
function loaddata() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.txt', true);
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4?`
      console.log(this.responseText);
    }
  }
  xhr.send();
  console.log(xhr);
}*/
document.getElementById('get_data').addEventListener('click', loaddata);
function loaddata() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.txt', true);
  xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      //document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4?`
      console.log(this.responseText);
    }
  }
  xhr.send();
  console.log(xhr);
}