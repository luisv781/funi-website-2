//let button1 = document.getElementById("button1");

document.getElementById("button1").addEventListener("click", button1Click);
function button1Click() {
  document.getElementById('hiddenp').innerHTML = 'hi';
}