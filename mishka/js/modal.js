var $modal = document.getElementById("modal");
var $btn = document.getElementById("modal-btn");
var $close = document.getElementsByClassName("close")[0];

function init(event) {
  $btn.addEventListener("click", modalShow);
  $close.addEventListener("click", modalClose);
  window.addEventListener("click", externalClick);
}

function modalShow(event) {
  if (event.target.classList.contains("modal-btn") || event.target.parentElement.classList.contains("modal-btn")) {
    $modal.classList.toggle("modal--show");
    event.preventDefault();
  }
}

function modalClose(event) {
  $modal.classList.toggle("modal--show");
}

function externalClick(event) {
  if (event.target == $modal) {
    modalClose();
  }
}

window.addEventListener("load", init);
