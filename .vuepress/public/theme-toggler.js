document.addEventListener("DOMContentLoaded", function() {
  var t = localStorage.getItem('readmatic.de-theme');
  var elems = document.getElementsByTagName('body');
  if(elems.length && t) elems[0].classList.add(t);
});
