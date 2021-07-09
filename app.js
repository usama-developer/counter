var add = () => {
    var input = document.getElementById('inp');
var display = document.getElementById('dis');
display.innerHTML = parseInt(display.innerHTML) + parseInt(input.value)
}

var sub = () => {
    var input = document.getElementById('inp');
var display = document.getElementById('dis');
display.innerHTML = parseInt(display.innerHTML) - parseInt(input.value)
}
