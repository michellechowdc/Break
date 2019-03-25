var timer;
var alert1;

function alertFunction() {
  timer = document.getElementById('minutes').value;
  alert1 = setInterval(function(){ alert("Take a break!"); }, timer * 60000);
}

function pause() {
  clearInterval(alert1);
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#saveButton').addEventListener('click', alertFunction);
  document.querySelector('#stopButton').addEventListener('click', pause);
});
