document.getElementById('get_data').addEventListener('click', loaddata);
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
}
