
var add = () => {
var input = document.getElementById('wrk');
var display = document.getElementById('show');
display.innerHTML = parseInt(display.innerHTML) + parseInt(input.value)
}

var sub = () => {
var input = document.getElementById('wrk');
var display = document.getElementById('show');
display.innerHTML = parseInt(display.innerHTML) - parseInt(input.value)
}
