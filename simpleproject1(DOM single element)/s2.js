
let val = document.querySelectorAll('li:nth-child(odd)');
val.forEach(function (item) {
  item.style.background = 'red';
  console.log(item);
});
console.log(val);