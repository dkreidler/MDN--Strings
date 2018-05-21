var button = document.querySelector('button');
var button2 = document.querySelector('p');

button.onclick = function() {
    var name = prompt('What is your name?');
    document.getElementById('response').innerHTML = 'Hello ' + name + ', nice to see you!';
    document.getElementById('response').style.display = 'inline-block';
};
button2.onclick = function() {
    document.getElementById('response').innerHTML = "";
    document.getElementById('response').style.display = "none";
};