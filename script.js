var button = document.querySelector('button');
var button2 = document.querySelector('p');

button.onclick = function() {
    var name = prompt('What is your name?');
    document.getElementById('response').innerHTML = 'Hello ' + name + ', nice to see you!';
};
button2.onclick = function() {
    document.getElementById('response').innerHTML = "";
};