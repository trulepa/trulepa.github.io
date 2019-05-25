function init(event) {
  var $toggle = document.getElementById("main-nav__toggle");
  $toggle.addEventListener("click", handleButtonClick);
  $toggle.classList.toggle("main-nav__toggle--nojs");
  var $mainNav = document.getElementsByClassName("main-nav")[0];
  $mainNav.classList.toggle("main-nav--nojs");
}

function handleButtonClick(event) {
  var $show = document.getElementById("site-list");
  this.classList.toggle("main-nav__toggle--active");
  $show.classList.toggle("site-list--show");
}

window.addEventListener("load", init);
